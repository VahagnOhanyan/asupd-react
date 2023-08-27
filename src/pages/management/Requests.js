import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as requestApi from "../api/requestApi";

const columns = [
    {field: "requestId", headerName: "ID Заказчика", width: 150},
    {field: "customerId", headerName: "Заказчик", width: 200},
    {field: "contractNumber", headerName: "Номер контракта", width: 150},
    {field: "requestNumber", headerName: "Номер заявки", width: 200},
    {field: "requestDescription", headerName: "Описание заявки", width: 200}
    
];

const Requests = () => {

    //
    const [requests, setRequests] = useState([])

    useEffect(() => {
        loadAllRequests(setRequests);
    }, [setRequests]);


    return (

            <DataGrid columns={columns} rows={requests} getRowId={request => request.requestId}/>
    )
}
export default Requests;

const loadAllRequests = (setRequests) => {
    requestApi.getAllRequests().then(requests => setRequests(requests))

};
