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
    let res = await fetch("http://localhost:5502/employee?code_boss=7")
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
//2.8 
export const getAllEmpleyeesAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employee")
    let employees = await res.json();

    const bossMap = new Map();
    for (const employee of employees){
        if (employee.code_boss !== null) {
            const bossRes = await fetch(`http://localhost:5502/employee/${employee.code_boss}`);
            const bossData = await bossRes.json();
            const bossName = `${bossData.name} ${bossData.lastname1} ${bossData.lastname2}`;
            bossMap.set(employee.code_boss, bossName);
        }
    }
    const employeesWithBoss = employees.map(employee => {
        let bossName = bossMap.get(employee.code_boss) || "N/A";
        return {
            name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            boss: bossName
        };
    });

    return employeesWithBoss;
}

//2.9  Devuelve un listado que muestre el nombre de cada empleados,
//el nombre de su jefe y el nombre del jefe de sus jefe. (FALTA ARREGLARLO TIRA UNDEFINED)
export const getAllEmployeesAndBossOfBoss = async () => {
    try {
        const res = await fetch("http://localhost:5502/employee");
        const employees = await res.json();

        const bossMap = new Map();

        const getBossName = async (employee_code) => {
            if (employee_code == null) {
                return "N/A";
            }
            const bossRes = await fetch(`http://localhost:5502/employee/${employee_code}`);
            const bossData = await bossRes.json();
            const bossName = `${bossData.name} ${bossData.lastname1} ${bossData.lastname2}`;
            bossMap.set(employee_code, bossName);
            return bossName;
        };

        const employeesWithBosses = await Promise.all(employees.map(async (employee) => {
            const bossName = await getBossName(employee.code_boss);
            const employeeName = `${employee.name} ${employee.lastname1} ${employee.lastname2}`;
            return { employee: employeeName, boss: bossName };
        }));

        const mapEmployeesAndBossesRecursively = (employeesWithBosses) => {
            return employeesWithBosses.map(({ employee, boss }) => {
                const bossOfBoss = bossMap.get(boss.split(" ")[0]);
                return {
                    employee,
                    boss,
                    bossOfBoss: bossOfBoss ? bossOfBoss : "N/A"
                };
            });
        };

        return mapEmployeesAndBossesRecursively(employeesWithBosses);
    } catch (error) {
        console.error("Error al obtener los empleados y sus jefes:", error);
        throw error; // Relanzar el error para manejarlo en un nivel superior
    }
};

//3.10
export const getEmployeesWithoutOfficeAndClients = async() =>{
    let employeesRes = await fetch(`http://localhost:5502/employee`);
    let clientsRes = await fetch(`http://localhost:5510/clients`);
    let officesRes = await fetch(`http://localhost:5504/offices`);

    let employees = await employeesRes.json();
    let clients = await clientsRes.json();
    let offices = await officesRes.json();

    let employeesWithoutOffice = employees.filter(employee => !employee.code_office);
    let employeesWithClients = clients.map(client => client.code_employee_sales_manager);
    let employeesWithoutClients = employees.filter(employee => !employeesWithClients.includes(employee.employee_code));

    return {
        employeesWithoutOffice: employeesWithoutOffice,
        employeesWithoutClients: employeesWithoutClients
    };
}