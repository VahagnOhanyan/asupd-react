import {DataGrid} from "@mui/x-data-grid";

const columns = [
    {field: "name", headerName: "Сайты", width: 200},
];
const rows = [
    {name: "Java Courses"},
    {name: "React Courses"},
    {name: "Pega Core Courses"},
    {name: "Python Courses"},
]
export default function Coworkers() {
    return (<DataGrid columns={columns} rows={rows} getRowId={row => row.name}></DataGrid>)
}