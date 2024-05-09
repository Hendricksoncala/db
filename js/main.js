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

import {
  getAllEmployeesWithBossNameAndTheBossesNames
} from "./module/employees.js"

console.log(await getAllEmployeesWithBossNameAndTheBossesNames())


