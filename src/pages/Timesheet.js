import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as employeeApi from "../../api/employeeApi";

const columns = [
    {field: "userIdNumber", headerName: "Таб. номер", width: 150},
    {field: "userFullname", headerName: "ФИО", width: 200},
    {field: "siteId", headerName: "Площадка", width: 200},
    {field: "userRoleId", headerName: "Роль", width: 200}
    
];

const Timesheet = () => {

    //
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadAllUsers(setEmployees);
    }, [setEmployees]);


    return (
            
            <DataGrid columns={columns} rows={employees} getRowId={employee => employee.userIdNumber}/>
    )
}
export default Timesheet;

const loadAllUsers = (setEmployees) => {
    employeeApi.getAllUsers().then(employees => setEmployees(employees))


};
