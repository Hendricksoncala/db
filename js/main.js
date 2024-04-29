import {
     getAllClientsAndSalesManagers ,
     getAllClientsAndSalesManagerNameAndIfThereIsPayments,
     getAllClientsWithoutPaymentsAndSalesManagerName,
     getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity

    }
      from "./module/clients.js";

console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity())


