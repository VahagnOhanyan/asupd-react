import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import * as projectApi from "../api/projectApi";

const columns = [
    {field: "projectId", headerName: "ID проекта", width: 150},
    {field: "customerId", headerName: "Заказчик", width: 200},
    {field: "contractNumber", headerName: "Номер контракта", width: 150},
    {field: "projectName", headerName: "Проект", width: 200}

];

const Projects = () => {

    //
    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadAllProjects(setProjects);
    }, [setProjects]);

    return (

            <DataGrid columns={columns} rows={projects} getRowId={project => project.projectId}/>
    )
}
export default Projects;

const loadAllProjects = (setProjects) => {
    projectApi.getAllProjects().then(projects => setProjects(projects))

};
