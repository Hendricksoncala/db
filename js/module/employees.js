//funcion para obtener el nombre y apellido de el empleado
export async function getEmployeesByCode(employeeCode) {  
    let res = await fetch(`http://localhost:5502/employee?employee_code=${employeeCode}`);
    let data = await res.json();
    return data;
}

//obtener el nombre de un empleado
export const getAllEmployeeNames = async(code)=>{
    let res=await fetch(`http://localhost:5502/employee?employee_code=${code}`)
    let data =await res.json();
    return data;
}



// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}
// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            })
        }
    })
    return dataUpdate
}
//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos 
// empleados que no sean representantes de ventas.
export const getAllFullnamePositionDiferentSalesRepresentative = async()=>{
    let res = await fetch("http://localhost:5502/employee?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdata = []
    data.forEach(val => {
        if(val.code_boss != null){
            dataUpdata.push({
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                position: val.position,
            })
        }
    });
    return dataUpdata;
}


//2.9  Devuelve un listado que muestre el nombre de cada empleados,
//el nombre de su jefe y el nombre del jefe de sus jefe. (FALTA ARREGLARLO TIRA UNDEFINED)
export const getAllEmployeesWithBossNameAndTheBossesNames = async () => {
    const res = await fetch("http://localhost:5502/employee");
    const dataEmployees = await res.json();
    const result = [];
  
    for (const employee of dataEmployees) {
      const bossNames = await getBossNames(employee.code_boss, []);
      result.push({
        employeeName: employee.name,
        bossName: bossNames.length > 0? bossNames[0] : '',
        bossBossName: bossNames.length > 1? bossNames[1] : '',
      });
    }
  
    return result;
  };
  
  const getBossNames = async (code_boss, bossNames) => {
    if (!code_boss) return bossNames;
  
    const res = await fetch(`http://localhost:5502/employee?employee_code=${code_boss}`);
    const bossData = await res.json();
    console.log('bossData:', bossData); // debuggear la respuesta de la API
    bossNames.push(bossData.name);
  
    return await getBossNames(bossData.code_boss, bossNames);
  };


