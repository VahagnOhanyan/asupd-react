import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as contractApi from "../../api/contractApi";
import {flattenObjInLoop} from "../common/flattener";

const columns = [
    {field: "contractId", headerName: "ID контракта", width: 150},
    {field: "customerId.customerName", headerName: "Заказчик", width: 200},
    {field: "contractNumber", headerName: "Номер контракта", width: 150},
    {field: "contractName", headerName: "Название контракта", width: 200}

];

const Contracts = () => {

    //
    const [contracts, setContracts] = useState([])

    useEffect(() => {
        loadAllContracts(setContracts);
    }, [setContracts]);

    return (

            <DataGrid columns={columns} rows={contracts} getRowId={contract => contract.contractId}/>
    )
}
export default Contracts;

const loadAllContracts = (setContracts) => {
    contractApi.getAllContracts().then(contracts => setContracts(flattenObjInLoop(contracts)))

};

const enrichmentByContracts = (projects, setProjects) =>{
    setP
};
