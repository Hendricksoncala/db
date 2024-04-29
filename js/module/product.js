//15.Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

export const getAllProductsOrnamentales100  = async() =>{
    let res = await fetch ("http://localhost:5506/products?gama=Ornamentales&stock_gt=100&_sort=-price_sale")
    let data = await res.json();
    return data
}


export async function getAllProductsByCode(code) {
    let res = await fetch(`http://localhost:5502/products?code=$code`);
    let data = await res.json();
    return data;
  }