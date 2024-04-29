import {
     getAllClientsAndSalesManagers 

    }
      from "./module/clients.js";

console.log(await getAllClients())

import { getAllClientsAndPaymentsWithSalesManagers } from "./module/clients.js";

// Llamar a la función para mostrar todos los clientes que han realizado pagos junto con sus representantes de ventas
getAllClientsAndPaymentsWithSalesManagers()
    .then(clientsWithPayments => {
        clientsWithPayments.forEach(client => {
            console.log(`Cliente: ${client.client_name}`);
            console.log(`Representante de Ventas: ${client.sales_manager_name}`);
            console.log("----------------------------------------");
        });
    })
    .catch(error => {
        console.error("Error al obtener clientes con pagos y representantes de ventas:", error);
    });
