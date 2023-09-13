import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import * as employeeApi from "../../api/employeeApi";
import {useEffect, useState} from "react";
import './EmployeeAssignment.css';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}


const EmployeeAssignment = () => {

  const [checked, setChecked] = useState([]);
  const [noSubEmployees, setNoSubEmployees] = useState([]);
  const [subEmployees, setSubEmployees] = useState([]);
  const [destinationItems, setDestinationItems] = useState([]);
  const leftChecked = intersection(checked, noSubEmployees);
  const rightChecked = intersection(checked, subEmployees);

 const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };


   const handleAllRight = () => {
      setSubEmployees(subEmployees.concat(noSubEmployees));
      setNoSubEmployees([]);
    };

    const handleCheckedRight = () => {
      setSubEmployees(subEmployees.concat(leftChecked));
      setNoSubEmployees(not(noSubEmployees, leftChecked));
      setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
      setNoSubEmployees(noSubEmployees.concat(rightChecked));
      setSubEmployees(not(subEmployees, rightChecked));
      setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
      setNoSubEmployees(noSubEmployees.concat(subEmployees));
      setSubEmployees([]);
    };
const save = () => {
      saveUserSubEmployees(setSubEmployees, subEmployees)
    };

    const cancel = () => {

        };
 useEffect(() => {
        loadUserSubEmployees(setSubEmployees);
        loadUserNoSubEmployees(setNoSubEmployees)
        console.log(subEmployees)
    }, []);



  const customList = (items) => (

      <Paper sx={{ width: 400, height: 500, overflow: 'auto' }}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </Paper>

    );

    return (
    <>
      <Grid class="transfer-list" container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(noSubEmployees)}</Grid>
        <Grid item sx={{display: 'flex', alignItems: 'center'}}>
          <Grid  container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={noSubEmployees.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={subEmployees.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(subEmployees)}</Grid>

                         <Button sx={{ width: 50, height: 20}}
                                 variant="outlined"
                                  size="small"
                                  onClick={cancel}
                           >Cancel</Button>
                           <Button sx={{ width: 50, height: 20}}
                                                             variant="outlined"
                                                             size="small"
                                                             onClick={save}
                                                             //disabled={rightChecked.length === 0 && leftChecked.length === 0}
                                                             >Save
                                                           </Button>
      </Grid>

                   </>
    );
}




const loadUserSubEmployees = (setSubEmployees) => {

      employeeApi.getUserSubEmployees().then(subEmployees => setSubEmployees(subEmployees))


  };
const loadUserNoSubEmployees = (setNoSubEmployees) => {
      employeeApi.getUserNoSubEmployees().then(noSubEmployees => setNoSubEmployees(noSubEmployees))

  };


  const saveUserSubEmployees = (setSubEmployees, subEmployees) => {
           var subIds = ""
           subEmployees.map((str) => {
               // Find the index of the first comma
               const indexOfFirstComma = str.indexOf(",");

               // Check if a comma exists in the string
               if (indexOfFirstComma !== -1) {
                 // Get the substring before the first comma
                 subIds = subIds + str.slice(0, indexOfFirstComma + 2);
             }
           });

        console.log(subIds)
        employeeApi.deleteUserSubEmployees().then(x => setSubEmployees(x))
        employeeApi.updateUserSubEmployees(subIds).then(x => setSubEmployees(x))

    };
export default EmployeeAssignment;