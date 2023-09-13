import {getCommonRequestProps} from "../common/common";

export const getAllEmployees = (token) => fetch("asupd/employee/all",
        {
        method: "GET",
     ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(employees => employees || []);


export const getUserSubEmployees = (token) => fetch("asupd/userAccess/sub/0239",
        {
        method: "GET",
     ...getCommonRequestProps(),
    })
    .then(response => response.json())
    .then(employees => employees || []);

export const getUserNoSubEmployees = (token) => fetch("asupd/userAccess/nosub/0239",
            {
            method: "GET",
         ...getCommonRequestProps(),
        })
        .then(response => response.json())
        .then(employees => employees || []);


export const deleteUserSubEmployees = () => fetch("/asupd/userAccess/delete/sub/0239",
    {
        method: "DELETE",
       headers: {
        ...getCommonRequestProps(),
            "Content-Type": "application/json",
            "Accept": "plain/text"
        },
    })
    .then(response => response.text());

export const updateUserSubEmployees = (subIds) => fetch("/asupd/userAccess/update/0239/sub/" + subIds,
    {method: "PUT",
    ...getCommonRequestProps(),
    })
    .then(response => response.text());