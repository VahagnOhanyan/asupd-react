import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Employees from "./pages/refs/Employees";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {Login} from "./login/Login";
import {AuthProvider} from "./auth/AuthProvider";

const App = () => {
    const navigate = useNavigate();

    /*const handleClick = (path) => {


    }*/
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate("/login");
        } else {
            setIsLoggedIn(true)
            // navigate(path);
        }
    }, []);

    return (

        <AuthProvider>
            {isLoggedIn ? (
                <Drawer variant="permanent">
                    <List>
                        <ListItem button component={Link} to="/employees">
                            <ListItemIcon>
                                <AccountCircle/>
                            </ListItemIcon>
                            <ListItemText primary="Employees"/>
                        </ListItem>
                    </List>
                </Drawer>
            ) : null}
            < Routes>
                < Route path="/login" element={<Login navigate={navigate}/>}/>
                <Route path="/employees" element={<Employees/>}/>
            </Routes>
        </AuthProvider>

    )
        ;
}

export default App;
