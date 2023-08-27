export const getAllContracts = () =>
        fetch(`/rest/contracts/all`, {method: "GET"})
                .then(response => response.json())
                .then(contracts => contracts || []);