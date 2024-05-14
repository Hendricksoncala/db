import { 
    getAllClientsFromCityAndCode,  
    getAll,
    getAllClientsAndSalesManagers,
    getAllClientsAndSalesManagerNameAndIfThereIsPayments,
    getAllClientsWithoutPaymentsAndSalesManagerName,
    getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
    getAllclientsNotPayments,
    getAllclientsNotRequests,
    getAllclientsNotRequestsAndNotPayments,
    getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity,

} from "../module/clients.js";

import {
    getAllEmpleyeesAndBoss,
    getAllEmployeesAndBossOfBoss,
    getEmployeesWithoutOfficeAndClients,
    getAllFullNameAndEmailsAndBoss
    
    
} from "../module/employees.js";

import {
    getProductsNeverOrdered,
    getProductsNotOrdered
} from "../module/product.js";

import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil,
    AllDirectionsWithClientsInFuenlabrada
}   from "../module/offices.js"
//PRIMERA PARTE DE LAS CONSULTAS------------------------------------------------------



//
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }


//1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        console.log(await getAllOficceAndCodeCity());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de Oficina: </b>${val.code_office}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
//2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil();
        console.log(await getAllOficceCityAndMovil());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de Oficina: </b>${val.code_office}</p>
                            <p><b>Telefono: </b>${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
    async getAllFullNameAndEmailsAndBossDesign(){
        let data = await getAllFullNameAndEmailsAndBoss();
        console.log(await getAllFullNameAndEmailsAndBoss());
    }

//16
    async getClientsEmployDesign(){
        let data = await getAllClientsFromCityAndCode();
        console.log(await getAllClientsFromCityAndCode())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


//SEGUNDA PARTE DE LAS MULTITABLA------------------------------------------------------------------------------------------------------------------------------------------------------
//2.1 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
    async getAllClientsAndSalesManagersDesign(){
        let data = await getAllClientsAndSalesManagers();
        console.log(await getAllClientsAndSalesManagers())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Representante de Ventas: </b>${val.sales_manager_name}</p>

                        </div>
                    </div>
                </div>
            `
        });

    }
//2.2 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPayments();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });
    }

//2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsWithoutPaymentsAndSalesManagerNameDesign(){
        let data = await getAllClientsWithoutPaymentsAndSalesManagerName();
        console.log(await getAllClientsWithoutPaymentsAndSalesManagerName())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });

    }
//2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.ClientsName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.ClientsName}</p>
                            <p><b>Representante de Ventas: </b>${val.manager}</p>
                            <p><b>Ciudad de Oficina </b>${val.cityoffice}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }


//2.5 Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    async getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCityDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.ClientsName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.ClientsName}</p>
                            <p><b>Representante de Ventas: </b>${val.manager}</p>
                            <p><b>Ciudad de Oficina </b>${val.cityoffice}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }
//2.6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
    async AllDirectionsWithClientsInFuenlabrada(){
        let data = await AllDirectionsWithClientsInFuenlabrada();
        console.log( await AllDirectionsWithClientsInFuenlabrada());
        data.forEach(val => {
            
        });
    }

//2.7
//2.8 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
    async getAllEmpleyeesAndBossDesign(){
        let data = await getAllEmpleyeesAndBoss();
        console.log(await getAllEmpleyeesAndBoss());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.employee}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Empleado: </b>${val.employee}<p>
                            <p><b>Boss </b>${val.boss}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    
    }

    //2.9
    async getAllEmployeesAndBossOfBossDesign(){
        let data = await getAllEmployeesAndBossOfBoss();
        console.log(await getAllEmployeesAndBossOfBoss());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.employee}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Empleado: </b>${val.employee}</p>
                            <p><b>Boss: </b>${val.boss}</p>
                            <p><b>bossOfBoss: </b>${val.bossOfBoss}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    //2.10
    async getEmployeesWithoutOfficeAndClientsDesign(){
        let data = await getEmployeesWithoutOfficeAndClients();
        console.log(await getEmployeesWithoutOfficeAndClients());
        
    }

//TERCERA PARTE DE LAS MULTITTABLAS---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3.1  Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago. 
    async getAllclientsNotPaymentsDesign(){
        let data = await getAllclientsNotPayments();
        console.log(await getAllclientsNotPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });
    }

// 3.2 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
    async getAllclientsNotRequestsDesign(){
        let data = await getAllclientsNotRequests();
        console.log(await getAllclientsNotRequests());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">getAllEmployeesAndBossOfBoss
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });

    }

// 3.3 Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
    async getAllclientsNotRequestsAndNotPaymentsDesign(){
        let data = await getAllclientsNotRequestsAndNotPayments();
        console.log( await getAllclientsNotRequestsAndNotPayments());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago ni pedido : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}


                        </div>
                    </div>
                </div>
        `
        });

    }


//3.4
//3.5
//3.6
//3.7
//3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido.
async getProductsNeverOrderedDesign(){
    let data = await getProductsNeverOrdered();
    console.log(await getProductsNeverOrdered());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> Productos nunca pedidos : </p>
                    <div>${val.code_product }</div> 
                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del pedido: </b>${val.name}</p>
                        
                    </div>
                </div>
            </div>
`
});
}

//3.9
async getProductsNotOrderedDesign(){
    let data = await getProductsNotOrdered();
    console.log(await getProductsNotOrdered());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> Productos nunca pedidos : </p>
                    <div>${val.code_product }</div> 
                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del pedido: </b>${val.name}</p>
                        <p><b>description: </b>${val.description}</p>
                        <p><b>Image: </b>${val.image}</p>
                        
                    </div>
                </div>
            </div>
`
});
}

//3.10
//3.11




    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        /*PARTE DE CLIENTES*/
        if(name=="logic" && now=="office_1") this.getAllOficceAndCodeCityDesign()
        if(name=="logic" && now=="office_2") this.getAllOficceCityAndMovilDesign()


        if(name=="logic" && now=="client_16") this.getClientsEmployDesign()
        if(name=="logic" && now=="client_7") this.getAllDesign()
        if(name=="logic" && now=="client_2.1") this.getAllClientsAndSalesManagersDesign()
        if(name=="logic" && now=="client_2.2") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign()
        if(name=="logic" && now=="client_2.3") this.getAllClientsWithoutPaymentsAndSalesManagerNameDesign()
        if(name=="logic" && now=="client_2.4") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign()
        if(name=="logic" && now=="client_2.5") this.getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCityDesign()
        // if(name=="logic" && now=="client_2.6") this.
        // if(name=="logic" && now=="client_2.7") this.


        if(name=="logic" && now=="employ_2.8") this.getAllEmpleyeesAndBossDesign()
        if(name=="logic" && now=="employ_2.9") this.getAllEmployeesAndBossOfBossDesign()
 


        if(name=="logic" && now=="client_3.1") this.getAllclientsNotPaymentsDesign()
        if(name=="logic" && now=="client_3.2") this.getAllclientsNotRequestsDesign()
        if(name=="logic" && now=="client_3.3") this.getAllclientsNotRequestsAndNotPaymentsDesign()

            
        /*PARTE DE EMPLEADOS*/ 
        if(name=="logic" && now=="employe_2.8") this.getAllEmpleyeesAndBossDesign()

        /*PARTE DE PRODUCTOS*/
        if(name=="logic" && now=="product_3.8") this.getProductsNeverOrderedDesign()
        if(name=="logic" && now=="product_3.9") this.getProductsNotOrderedDesign()




        
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}