// 1. Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://localhost:5504/offices?city=Barcelona")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    })
    return dataUpdate
}


//obtener el nombre de la ciudad de la oficina
export const getAllOffices = async(codeOffice)=>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${codeOffice}`)
    let data = await res.json();
    return data;
}
