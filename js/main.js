import {
     getAllClientsAndSalesManagers ,
     getAllClientsAndSalesManagerNameAndIfThereIsPayments,
     getAllClientsAndSalesManagerNameAndIfThereIsNotPayments
    }
      from "./module/clients.js";

console.log(await getAllClientsAndSalesManagerNameAndIfThereIsNotPayments())


