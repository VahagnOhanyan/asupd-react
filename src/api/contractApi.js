export const getAllCustomers = () =>
        fetch(`/rest/customers/all`, {method: "GET"})
                .then(response => response.json())
                .then(customers => customers || []);