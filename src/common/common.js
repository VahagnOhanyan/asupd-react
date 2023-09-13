export const getCommonRequestProps = () => {
    const props = {};
    const token = localStorage.getItem("jwtToken");
    if (token) {
        props.headers = {Authorization: `${localStorage.getItem("jwtToken")}`};
    }
    return props;
};