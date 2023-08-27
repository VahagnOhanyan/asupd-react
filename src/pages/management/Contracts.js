import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as contractApi from "../api/contractApi";

const columns = [
    {field: "contractId", headerName: "ID контракта", width: 150},
    {field: "customerId", headerName: "Заказчик", width: 200},
    {field: "contractNumber", headerName: "Номер контракта", width: 150},
    {field: "contractName", headerName: "Название контракта", width: 200}

];

const Contracts = () => {

    //
    const [contracts, setContracts] = useState([])

    useEffect(() => {
        loadAllcontracts(setContracts);
    }, [setContracts]);

    return (

            <DataGrid columns={columns} rows={contracts} getRowId={contract => contract.contractId}/>
    )
}
export default Contracts;

const loadAllcontracts = (setContracts) => {
    contractApi.getAllContracts().then(contracts => setContracts(contracts))

};
