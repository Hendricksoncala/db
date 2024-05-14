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
  AllDirectionsWithClientsInFuenlabrada,
  getAllOficceAndCodeCity,
  
} from "./module/offices.js"

import {
  getAllEmpleyeesAndBoss,
  getAllEmployeesAndBossOfBoss,
  getEmployeesWithoutOfficeAndClients,
  getAllFullNameAndEmailsAndBoss,
  getAllFullnamePositionDiferentSalesRepresentative
  

} from "./module/employees.js"

console.log(await getAllFullnamePositionDiferentSalesRepresentative())


