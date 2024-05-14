import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`


                <my-details logic="client_16" text="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
                <my-details logic="client_2.1" text="2.1  Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="client_2.2"text= "2.2 Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_2.3"text= "2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_2.4"text= "2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_2.5"text= "2.5 Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>


                <my-details logic="client_3.1"text= "3.1 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago."></my-details>
                <my-details logic="client_3.2"text= "3.2 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido."></my-details>
                <my-details logic="client_3.3"text= "3.3 Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido."></my-details>


            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <my-details logic="employ_2.8"text="2.8 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>
                <my-details logic="employ_2.9"text="2.9 Devuelve un listado que muestre el nombre de cada empleados,el nombre de su jefe y el nombre del jefe de sus jefe. "></my-details>
            
            `;
        }
        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
                <my-details logic="product_3.8" text="3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido."></my-details>
                <my-details logic="product_3.9" text="3.9 DDevuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto."></my-details>

            `;
        }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
            <my-details logic="office_1" text="1.Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            <my-details logic="office_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>

            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)