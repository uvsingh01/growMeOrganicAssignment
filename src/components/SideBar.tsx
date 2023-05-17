import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


type prop={
  department:string,
  sub_departments:string[]
}

function IndeterminateCheckbox({department, sub_departments}: prop) {
  const [checked, setChecked] =useState([false, false]);

  const [openOption, setOpenOption] = useState(true);

  const handleClick = () => {
    setOpenOption(!openOption);
  };
  
  const handleChange1 = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 11 }}>
      <FormControlLabel
        label={sub_departments[0]}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={sub_departments[1]}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <List>
        <ListItemButton>
        {openOption ? <RemoveIcon sx={{padding:"10px"}} onClick={handleClick}/> : <AddIcon sx={{padding:"10px"}}   onClick={handleClick}/>}
        <FormControlLabel
        label={department}
        control={
          <Checkbox
            sx={{marginLeft:"10px"}}
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
          
        </ListItemButton>
        <Collapse in={openOption} timeout="auto" unmountOnExit>
            {children}
        </Collapse>
      </List>
    </div>
  );
}

const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  
  const options = [
    {
      department: "Customer Service",
      sub_departments: ["Support", "Customer Success"],
    },
    {
      department: "Design",
      sub_departments: ["Graphic Design", "Product Design", "web_design"],
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Toolbar sx={{ width: "100%" }}>
      <Menu onClick={handleDrawerOpen}></Menu>
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        {
          options.map((el,i)=> <IndeterminateCheckbox key={i} department={el.department} sub_departments={el.sub_departments}></IndeterminateCheckbox>)
        }
      </Drawer>
    </Toolbar>
  );
};

export default SideBar;
