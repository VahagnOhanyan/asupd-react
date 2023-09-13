import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Employees from "./pages/refs/Employees";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {Login} from "./login/Login";
import {AuthProvider} from "./auth/AuthProvider";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 200;
const App = () => {
    const navigate = useNavigate();
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
             <Box sx={{ display: 'flex' }}>
            {isLoggedIn ? (
                    <>
                    <CssBaseline />
                     <AppBar
                       position="fixed"
                       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                     >

                     </AppBar>

                   <Drawer sx={{
                   width: drawerWidth,
                   flexShrink: 0,
                   '& .MuiDrawer-paper': {
                       width: drawerWidth,
                       boxSizing: 'border-box',
                     },
                   }}
                   variant="permanent"
                   anchor="left" >
                       <List>
                           <ListItem button component={Link} to="/employees">
                               <ListItemIcon>
                                   <AccountCircle/>
                               </ListItemIcon>
                               <ListItemText primary="Employees"/>
                           </ListItem>
                       </List>
                   </Drawer>
                   </>


            ) : null}
           <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>

             < Routes>

              <Route path="/login" element={<Login navigate={navigate}/>}/>
               <Route path="/employees" element={<Employees/>}/>
            </Routes>
             </Box>
             </Box>
        </AuthProvider>

    )

}

export default App;
