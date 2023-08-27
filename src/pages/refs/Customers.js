import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as employeeApi from "../../api/employeeApi";
import {Typography} from "@mui/material";

const columns = [
    {field: "userIdNumber", headerName: "Таб. номер", width: 150},
    {field: "userFullname", headerName: "ФИО", width: 200},
    {field: "userTel", headerName: "Телефон", width: 200},
    {field: "userAdress", headerName: "Адрес", width: 200},
    {field: "userEmail", headerName: "Email", width: 200},
    {field: "siteName", headerName: "Площадка", width: 200},
    {field: "userRoleId", headerName: "Роль", width: 200}
    
];

const Employees = () => {

    //
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadAllUsers(setEmployees);
    }, [setEmployees]);


    return (

            <DataGrid columns={columns} rows={employees} getRowId={employee => employee.userIdNumber}/>
    )
}
export default Employees;

const loadAllUsers = (setEmployees) => {
    employeeApi.getAllUsers().then(employees => setEmployees(employees))

};
