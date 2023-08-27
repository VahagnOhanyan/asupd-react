export const getAllUsers = () =>
        fetch(`/rest/users/all`, {method: "GET"})
                .then(response => response.json())
                .then(employees => employees || []);