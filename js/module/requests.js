//9.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllCodeRequestCodeClientDateRequestDateWait = async () => {
    let res = await fetch("https://localhost:5508/requests");
    let data = await res.json();
    let overdueRequests = [];

    data.forEach(val => {
        // Verifica si el pedido no ha sido entregado
        if (val.status !== "Entregado") {
            // Convierte las fechas a objetos Date
            let fechaEsperada = new Date(val.date_wait);
            let fechaActual = new Date();
            
            // Compara las fechas
            if (fechaEsperada < fechaActual) {
                // Si la fecha esperada es anterior a la fecha actual, agrega el pedido a la lista
                overdueRequests.push({
                    code_request: val.code_request,
                    code_client: val.code_client,
                    date_wait: val.date_wait,
                    date_delivery: val.date_delivery
                });
            }
        }
    });

    return overdueRequests;
};
