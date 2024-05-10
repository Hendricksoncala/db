import { getAllEmployeeNames } from "./employees.js";
import { getAllClientsWhoPaid } from "./payment.js";
import { getAllOffices } from "./offices.js";
import { getAllClientsWhoRequest } from "./requests.js";
import { getAllRequestDetailsByRequestCode } from "./request_details.js";
import { getAllProductsByCode } from "./product.js"


// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.
export const getAllClientsFromCityAndCode = async()=>{
    let res = await fetch("http://localhost:5510/clients?city=Madrid")
    let data = await res.json();
    let clientUpdate = [];
    clientUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return clientUpdate
}
// Consultas multitabla
// 2.7. Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getAll = async()=>{

    let res = await fetch("http://localhost:5510/clients")
    let client = await res.json();
    for (let i = 0; i < client.length; i++) {
        // Actualiza la data clientes eliminando identificadores que no queremos
        let {  
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        // Realizamos la consulta al fucion modular de los empleados para buscar
        // la informacion del empleado segun su id de la data cliente anterior
        // buscada
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)
        
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id:id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        // {  
        //     client_code: 38,
        //     client_name: 'El Jardin Viviente S.L',
        //     contact_name: 'Justin'hola
        //     name: 'Mariko',
        //     lastname1: 'Kishi',
        //     lastname2: '',
        //     code_office: 'SYD-AU',
        //     city: 'Sydney'
        //   }
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_employees: data.city
        }
        
    }
    return client;
}


//2.1 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

import { getEmployeesByCode } from "./employees.js";

// Función para obtener todos los clientes y sus representantes de ventas
export async function getAllClientsAndSalesManagers() {
    const clientsResponse = await fetch("http://localhost:5510/clients");
    const clientsData = await clientsResponse.json();

    const clientsWithSalesManagers = [];

    // Iterar sobre cada cliente
    for (const client of clientsData) {
        // Obtener el empleado (representante de ventas) asociado a este cliente
        const employeeData = await getEmployeesByCode(client.code_employee_sales_manager);
        
        // Verificar si se encontraron datos de empleado
        if (employeeData && employeeData.length > 0) {
            const salesManager = employeeData[0]; // Tomar el primer empleado encontrado
            // Agregar el cliente junto con su representante de ventas al arreglo de resultados
            clientsWithSalesManagers.push({
                client_name: client.client_name,
                sales_manager_name: `${salesManager.name} ${salesManager.lastname1} ${salesManager.lastname2}`
            });
        } else {
            // Si no se encontraron datos de empleado, agregar el cliente con representante de ventas desconocido
            clientsWithSalesManagers.push({
                client_name: client.client_name,
                sales_manager_name: "Representante de Ventas Desconocido"
            });
        }
    }

    return clientsWithSalesManagers;
}


//2.2 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsAndSalesManagerNameAndIfThereIsPayments = async ()=>{
    let res = await fetch("http://localhost:5510/clients")
    let client = await res.json();
    let dataUpdated = [];
    for (let i = 0; i < client.length; i++){
        let [payments] = await getAllClientsWhoPaid(client[i].client_code);

        if (payments != null){
            let { ...paymentsUpdate } = payments;
            let { ...clientUpdate} = client[i];
            client[i] = clientUpdate;
            let [ employee ] = await getAllEmployeeNames(clientUpdate.code_employee_sales_manager);
            let { ...employeeUpdate } =  employee;
            let data = { ...clientUpdate, ...employeeUpdate, ...paymentsUpdate };
            dataUpdated.push({
                "client_name": `${data.client_name}`,
                "sales_manager_complete_name": `${data.name} ${data.lastname1} ${data.lastname2}`

            })
        }
    }
    return dataUpdated
}

//2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getAllClientsWithoutPaymentsAndSalesManagerName = async () => {
    let res = await fetch("http://localhost:5510/clients");
    let clients = await res.json();
    let dataUpdated = [];
  
    for (let i = 0; i < clients.length; i++) {
      let clientCode = clients[i].client_code;
      let payments = await getAllClientsWhoPaid(clientCode);


      
      if (!payments || payments.length === 0) { // Si no hay pagos o el arreglo está vacío
        let employeeCode = clients[i].code_employee_sales_manager;
        let employee = await getAllEmployeeNames(employeeCode);
        let salesManagerName = `${employee[0].name} ${employee[0].lastname1} ${employee[0].lastname2}`;
        
  
        dataUpdated.push({
          client_name: clients[i].client_name,
          sales_manager_complete_name: salesManagerName
        });
      }
    }
  
    return dataUpdated;
  };

//2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity = async () => {
  let payments = await fetch("http://localhost:5505/payments").then(response => response.json())
  let clients = await fetch("http://localhost:5510/clients").then(response => response.json())
  let managers = await fetch("http://localhost:5502/employee").then(response => response.json())
  let offices = await fetch("http://localhost:5504/offices").then(response => response.json())
  let dataUpdate = []

  payments.forEach(payment => {
    clients.forEach(client => {
      if (payment.code_client == client.client_code) {
        managers.forEach(manager => {
          if (manager.employee_code == client.code_employee_sales_manager) {
            offices.forEach(office => {
              if (manager.code_office == office.code_office) {
                dataUpdate.push({
                  ClientsName: client.client_name,
                  manager: `${manager.name} ${manager.lastname1} ${manager.lastname2}`,
                  cityoffice: office.city
                });
              }
            });
          }
        });
      }
    });
  });
  let uniqueUpdate = {};
  dataUpdate.forEach(item => {
    if (!uniqueUpdate[item.ClientsName]) {
      uniqueUpdate[item.ClientsName] = item;
    }
  });

  let result = Object.values(uniqueUpdate);
  return result;
}

//2.5 Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity = async () => {
  let payments = await fetch("http://localhost:5505/payments").then(response => response.json())
  let clients = await fetch("http://localhost:5510/clients").then(response => response.json())
  let managers = await fetch("http://localhost:5502/employee").then(response => response.json())
  let offices = await fetch("http://localhost:5504/offices").then(response => response.json())
  let dataUpdate = []

  clients.forEach(client => {
    let hasPayment = false
    payments.forEach(payment => {
      if (payment.code_client == client.client_code) {
        hasPayment = true
      }
    })
    if (!hasPayment) {
      managers.forEach(manager => {
        if (manager.employee_code == client.code_employee_sales_manager) {
          offices.forEach(office => {
            if (manager.code_office == office.code_office) {
              dataUpdate.push({
                ClientsName: client.client_name,
                manager: `${manager.name} ${manager.lastname1} ${manager.lastname2}`,
                cityoffice: office.city
              })
            }
          })
        }
      })
    }
  })

  return dataUpdate
}


//2.10 Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
// Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const getClientsWithDelayedOrders = async () => {
  try {
    const orders = await fetch("http://localhost:5501/orders").then(response => response.json());
    const clients = await fetch("http://localhost:5510/clients").then(response => response.json());
    const offices = await fetch("http://localhost:5504/offices").then(response => response.json());
    const payments = await fetch("http://localhost:5505/payments").then(response => response.json());

    const delayedClients = clients.filter(client => {
      const clientOrders = orders.filter(order => order.client_id === client.id);
      const hasDelayedOrder = clientOrders.some(order => order.delivery_status === "delayed");
      return hasDelayedOrder;
    });

    const delayedClientsInfo = delayedClients.map(client => {
      const office = offices.find(office => office.code_office === client.code_office);
      const clientPayments = payments.filter(payment => payment.code_client === client.client_code);
      const totalPayments = clientPayments.reduce((total, payment) => total + payment.total, 0);

      return {
        ClientsName: client.client_name,
        City: office.city,
        TotalPayments: totalPayments
      };
    });

    return delayedClientsInfo;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


//2. 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
export const getProductGamasByClient = async () => {
  let clients = await fetch('http://localhost:5510/clients');
  clients = await clients.json();
  let productGamasByClient = [];
  for (let client of clients) {
    let clientRequests = await getAllClientsWhoRequest(client.client_code);
    let gamas = [];
    for (let request of clientRequests) {
      let requestDetails = await getAllRequestDetailsByRequestCode(request.code_request);
      for (let requestDetail of requestDetails) {
        let product = await getAllProductsByCode(requestDetail.product_code);
        for (let prod of product) {
          if (!gamas.includes(prod.gama)) {
            gamas.push(prod.gama);
          }
        }
      }
    }
    productGamasByClient.push({
      client_name: client.client_name,
      gamas: gamas
    });
  }
  return productGamasByClient;
};


//3.1 
export const getAllclientsNotPayments = async() =>{
  let res = await fetch(`http://localhost:5510/clients`)
  let clients = await res.json()
  let paymentsRes = await fetch(`http://localhost:5505/payments`);
  let payments = await paymentsRes.json();
  let clientsWithoutPayments = clients.filter(client => {
      return !payments.some(payment => payment.client_code === client.client_code);
  });

  return clientsWithoutPayments;
}


//3.2
export const getAllclientsNotRequests = async() =>{
  let res = await fetch(`http://localhost:5510/clients`)
  let requestsRes = await fetch(`http://localhost:5508/requests`);
  let clients = await res.json()
  let requests = await requestsRes.json();

  let clientsWithoutRequests = clients.filter(client => {
      return !requests.some(requests => requests.code_client == client.client_code);
  });

  return clientsWithoutRequests;
}

//3.3
export const getAllclientsNotRequestsAndNotPayments = async() =>{
  let res = await fetch(`http://localhost:5510/clients`)
  let paymentsRes = await fetch(`http://localhost:5505/payments`);
  let requestsRes = await fetch(`http://localhost:5508/requests`);
  let clients = await res.json()
  let payments = await paymentsRes.json();
  let requests = await requestsRes.json();

  let clientsWithoutPayments = clients.filter(client => {
      return !payments.some(payment => payment.code_client === client.client_code);
  });

  let clientsWithoutRequests = clientsWithoutPayments.filter(client => {
      return !requests.some(request => request.code_client === client.client_code);
  });

  return clientsWithoutRequests;
}


//3.11 
