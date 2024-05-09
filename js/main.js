import {
    getAll,
     getAllClientsAndSalesManagers ,
     getAllClientsAndSalesManagerNameAndIfThereIsPayments,
     getAllClientsWithoutPaymentsAndSalesManagerName,
     getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
     getAllClientsAndSalesManagerNameAndIfThereWhoDontPaymentAndCity

    }
      from "./module/clients.js";
import {
  AllDirectionsWithClientsInFuenlabrada
} from "./module/offices.js"

console.log(await getAllClientsWithoutPaymentsAndSalesManagerName())


