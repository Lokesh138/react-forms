import { Button, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import MaterialTable from "material-table";
import React, { useState } from "react";
import TemporaryDrawer from "./Drawer";

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false)
  const options = {
    headerStyle: {
      backgroundColor: "purple",
      color: "black"
    },
    search: false,
    toolbar: false,
    paging: false
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  };

  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: "mobileNumber" },
    { title: "Office Number", field: "officeNumber" },
    { title: "Address", field: "address" }
  ];

  const handleClose = () => {
    setOpen(false)
  }

  const handleSave = (object) =>{
    setData([...data,object])
  
  }

  return (
    <ThemeProvider>
      <TemporaryDrawer
        open={open}
        handleClose={handleClose}
        handleSave = {handleSave}
      />
      <Grid container>
        <Grid item xs={2}>
          <h4 >Contacts</h4>
        </Grid>
        <Grid item xs={8}>
          <h6 > {data.length} Contacts </h6>
        </Grid>
        <Grid item xs={2} margin="auto">
          <Button
            color="primary"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            ADD NEW
          </Button>
        </Grid>
      </Grid>
      <MaterialTable
        style={style}
        columns={columns}
        data={data}
        options={options}
      />
    </ThemeProvider>
  )
}

export default App


