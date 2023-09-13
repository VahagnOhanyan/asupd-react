import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as employeeApi from "../../api/employeeApi";
import {flattenObjInLoop} from "../utils/flattener";
import {Typography} from "@mui/material";
import EmployeeAssignment from "../assignments/EmployeeAssignment";

const columns = [
    {field: "userIdNumber", headerName: "Таб. номер", width: 150},
    {field: "userFullname", headerName: "ФИО", width: 200},
    {field: "userTel", headerName: "Телефон", width: 150},
    {field: "userAdress", headerName: "Адрес", width: 150},
    {field: "userEmail", headerName: "Email", width: 200},
    {field: "siteName", headerName: "Площадка", width: 150},
    {field: "userRoleName", headerName: "Роль", width: 150},
    {field: "userActivityName", headerName: "Статус", width: 150}

];

const Employees = () => {
     const [selectedRow, setSelectedRow] = useState(null);
     const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadAllEmployees(setEmployees);
    }, []);

    const handleRowClick = (row) => {
    setSelectedRow(row);
    };


    return (
              <>
        <DataGrid columns={columns} rows={employees} getRowId={employee => employee.userIdNumber} autoHeight onRowDoubleClick={handleRowClick}/>
      {selectedRow &&
         <EmployeeAssignment/>
         }
           </>
    )
}



const loadAllEmployees = (setEmployees) => {

    employeeApi.getAllEmployees().then(employees => setEmployees(flattenObjInLoop(employees)))

};
export default Employees;