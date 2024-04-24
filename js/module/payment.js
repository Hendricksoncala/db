
//13.Devuelve un listado con todo los pagos que se realizaron con todos los pagos que se realizaron en el ano 2008 mediante paypal. Ordene el resultado de menor a mayor
export const getAllPageOfPaypalAt2008 = async () => {
    let res = await fetch("http://localhost:5505/payments")
    let data =await res.json();
} 