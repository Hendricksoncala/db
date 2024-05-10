import { 
    getAllClientsFromCityAndCode,  
    getAll,
    getAllClientsAndSalesManagers,
    getAllClientsAndSalesManagerNameAndIfThereIsPayments,
    getAllClientsWithoutPaymentsAndSalesManagerName,
    getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity,
    getAllclientsNotPayments,
    getAllclientsNotRequests,
    getAllclientsNotRequestsAndNotPayments
} from "../module/clients.js";

import {
    
} from "../module/employees.js";

import {
    getProductsNeverOrdered
} from "../module/product.js";
//PRIMERA PARTE DE LAS CONSULTAS

//16.
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    async getClientsEmployDesign(){
        let data = await getAllClientsFromCityAndCode();
        console.log(await getAllClientsFromCityAndCode())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }


//SEGUNDA PARTE DE LAS MULTITABLA---------------------------------------------------------------------------
//2.1 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
    async getAllClientsAndSalesManagersDesign(){
        let data = await getAllClientsAndSalesManagers();
        console.log(await getAllClientsAndSalesManagers())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Representante de Ventas: </b>${val.sales_manager_name}</p>

                        </div>
                    </div>
                </div>
            `
        });

    }
//2.2 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPayments();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });
    }

//2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
    async getAllClientsWithoutPaymentsAndSalesManagerNameDesign(){
        let data = await getAllClientsWithoutPaymentsAndSalesManagerName();
        console.log(await getAllClientsWithoutPaymentsAndSalesManagerName())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre de cliente: </b>${val.client_name}</p>
                            <p><b>Representante de Ventas: </b>${val.sales_manager_complete_name}</p>

                        </div>
                    </div>
                </div>
        `
        });

    }
//2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    async getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign(){
        let data = await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity();
        console.log(await getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCity())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.ClientsName}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Cliente: </b>${val.ClientsName}</p>
                            <p><b>Representante de Ventas: </b>${val.manager}</p>
                            <p><b>Ciudad de Oficina </b>${val.cityoffice}</p>

                        </div>
                    </div>
                </div>
        `
            
        });
    }

//TERCERA PARTE DE LAS MULTITTABLAS--------------------------------------------------------------------------------
//3.1  Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago. 
    async getAllclientsNotPaymentsDesign(){
        let data = await getAllclientsNotPayments();
        console.log(await getAllclientsNotPayments())
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });
    }

// 3.2 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
    async getAllclientsNotRequestsDesign(){
        let data = await getAllclientsNotRequests();
        console.log(await getAllclientsNotRequests());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pedido : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}

                        </div>
                    </div>
                </div>
        `
        });

    }

// 3.3 Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
    async getAllclientsNotRequestsAndNotPaymentsDesign(){
        let data = await getAllclientsNotRequestsAndNotPayments();
        console.log( await getAllclientsNotRequestsAndNotPayments());
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <p> Ningun pago ni pedido : </p>
                        <div>${val.client_name }</div> 
                        
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo: </b>${val.client_code}</p>
                            <p><b>Nombre de cliente: </b>${val.client_name}


                        </div>
                    </div>
                </div>
        `
        });

    }


//3.4
//3.5
//3.6
//3.7
//3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido.
async getProductsNeverOrderedDesign(){
    let data = await getProductsNeverOrdered();
    console.log(await getProductsNeverOrdered());
    data.forEach(val => {
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <p> Productos nunca pedidos : </p>
                    <div>${val.code_product }</div> 
                    
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.client_code}</p>
                        <p><b>Nombre de cliente: </b>${val.client_name}


                    </div>
                </div>
            </div>
`
});
}



    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_16") this.getClientsEmployDesign()
        if(name=="logic" && now=="client_7") this.getAllDesign()
        if(name=="logic" && now=="client_2.1") this.getAllClientsAndSalesManagersDesign()
        if(name=="logic" && now=="client_2.2") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign()
        if(name=="logic" && now=="client_2.3") this.getAllClientsWithoutPaymentsAndSalesManagerNameDesign()
        if(name=="logic" && now=="client_2.4") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsAndCityDesign()
        if(name=="logic" && now=="client_3.1") this.getAllclientsNotPaymentsDesign()
        if(name=="logic" && now=="client_3.2") this.getAllclientsNotRequestsDesign()
        if(name=="logic" && now=="client_3.3") this.getAllclientsNotRequestsAndNotPaymentsDesign()
        

         
            
        if(name=="logic" && now=="product_3.8") this.getProductsNeverOrderedDesign()



        
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}