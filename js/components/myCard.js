import { 
    getAllClientsFromCityAndCode,  
    getAll,
    getAllClientsAndSalesManagers,
    getAllClientsAndSalesManagerNameAndIfThereIsPayments,
    getAllClientsWithoutPaymentsAndSalesManagerName,
} from "../module/clients.js";
// import {
//     getAllEmployNotClients 
// } from "../module/employees.js";

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

    // async getAllClientsFromCityAndCodeDesign(){
    //     let data = await getAllClientsFromCityAndCode();
    //     data.forEach(val => {
    //         let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
    //         this.shadowRoot.innerHTML += /*html*/`
            
    //             <div class="report__card">
    //                 <div class="card__title">
    //                     <div>${val.client_name} # ${val.client_code}</div>
    //                 </div>
    //                 <div class="card__body">
    //                     <div class="body__marck">
    //                         <p><b>Id: </b> ${val.id}</p>
    //                         <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
    //                         <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
    //                         <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
    //                         <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
    //                         <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
    //                         <p><b>Total a prestar: </b>${money}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    // }
    // async getAllEmployNotClientsDesign(){
    //     let data = await getAllEmployNotClients();
    //     data.forEach(val => {
    //         this.shadowRoot.innerHTML += /*html*/`
            
    //             <div class="report__card">
    //                 <div class="card__title">
    //                     <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
    //                 </div>
    //                 <div class="card__body">
    //                     <div class="body__marck">
    //                         <p><b>Id: </b> ${val.id}</p>
    //                         <p><b>Cargo: </b>${val.position}</p>
    //                         <p><b>Oficina: </b>${val.code_office}</p>
    //                         <p><b>Jefe encargado: </b>${val.name_boss}</p>
    //                         <p><b>Numero de extencion: </b>${val.extension}</p>
    //                         <p><b>Correo electronico: </b>${val.email}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    // }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_16") this.getClientsEmployDesign()
        if(name=="logic" && now=="client_7") this.getAllDesign()
        if(name=="logic" && now=="client_2.1") this.getAllClientsAndSalesManagersDesign()
        if(name=="logic" && now=="client_2.2") this.getAllClientsAndSalesManagerNameAndIfThereIsPaymentsDesign()
        if(name=="logic" && now=="client_2.3") this.getAllClientsWithoutPaymentsAndSalesManagerNameDesign()

        
        // if(name=="logic" && now=="client_16") this.getAllClientsFromSpainAndRepresentative11Or30Design()
        // if(name=="logic" && now=="employ_12") this.getAllEmployNotClientsDesign()
    }
}