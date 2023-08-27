import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as customerApi from "../../api/customerApi";

const columns = [
    {field: "customerId", headerName: "ID Заказчика", width: 150},
    {field: "customerName", headerName: "Заказчик", width: 200},
    {field: "customerFullName", headerName: "Полное наименование", width: 200}
    
];

const Customers = () => {

    //
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        loadAllUsers(setCustomers);
    }, [setCustomers]);


    return (

            <DataGrid columns={columns} rows={customers} getRowId={customer => customer.customerId}/>
    )
}
export default Customers;

const loadAllUsers = (setCustomers) => {
    customerApi.getAllCustomers().then(customers => setCustomers(customers))

};
