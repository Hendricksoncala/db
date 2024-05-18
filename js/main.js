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
     getAllClientsWhoHaveRequestedButHaventPaid,
     getAllSpanishClients
 

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

import {
  requestStatuses,
  getAllCodeRequestCodeClientDateRequestDateWait,
  getOverdueRequests,
  getAllRejectedOrdersIn2009,
  getAllDeliveredOrderInJanuary
} from "./module/requests.js"

import {
  getAllPaymentsFromPayPalEachYear

} from "./module/payment.js"
console.log(await getAllPaymentsFromPayPalEachYear())


