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
     getAllClientsWhoHaveRequestedButHaventPaid
 

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
  getBossFullNameAndEmail,
  getAllEmployeesThatDontHaveOffice,
  getAllEmployeesThatArentAssociatedWithAnyClient
  ,
  

} from "./module/employees.js"

import {

  getProductsNeverOrdered,
  getProductsNotOrdered

} from "./module/product.js"

console.log(await getAllClientsWhoHaveRequestedButHaventPaid())


