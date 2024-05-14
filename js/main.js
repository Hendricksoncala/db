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
     

    }
      from "./module/clients.js";
import {
  AllDirectionsWithClientsInFuenlabrada
  
} from "./module/offices.js"

import {
  getAllEmpleyeesAndBoss,
  getAllEmployeesAndBossOfBoss,
  getEmployeesWithoutOfficeAndClients,
  displayEmployeesWithoutOfficeAndClients
} from "./module/employees.js"

console.log(await displayEmployeesWithoutOfficeAndClients())


