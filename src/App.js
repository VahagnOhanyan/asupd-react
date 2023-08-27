// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, Business, Assignment, RequestQuote, HourglassEmpty, AccessTime } from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <Drawer variant="permanent">
        <List>
          <ListItem button component={Link} to="/employees">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItem>
          {/* Repeat similar ListItem components for other menu items */}
        </List>
      </Drawer>
      <Switch>
        <Route path="/employees">
          {<Employees>}
        </Route>
        {/* Define routes for other menu items */}
      </Switch>
    </Router>
  );
}

export default App;
