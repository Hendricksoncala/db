import {
    getAll,
     getAllClientsAndSalesManagers ,
     getAllClientsAndSalesManagerNameAndIfThereIsPayments,
     getAllClientsWithoutPaymentsAndSalesManagerName,
     getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
     getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity,
     getClientsWithDelayedOrders,
     getProductGamasByClient,
     getAllclientsNotPayments,
     getAllclientsNotRequests

    }
      from "./module/clients.js";
import {
  AllDirectionsWithClientsInFuenlabrada
} from "./module/offices.js"

import {
  getAllEmpleyeesAndBoss
} from "./module/employees.js"

console.log(await getAllEmpleyeesAndBoss())


