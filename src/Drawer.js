import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Stack, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TemporaryDrawer = ({ open, handleClose, handleSave }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: '',
    officeNumber: '',
    mobileNumber: '',
    address: ''
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const disabled = formData.name>2 || formData.mobileNumber.length!==10

  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer
          anchor={"left"}
          open={open}
          onClose={() => handleClose}
          sx={{
            width: 400,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 400,
            },
          }}
        >
          <div style={{ display: 'flex' }}>
            <h3 style={{ flex: 3 }}>Add Contact</h3>
            <IconButton onClick={handleClose} styel={{ flex: 1 }}>
              <CloseIcon />
            </IconButton>
          </div>
          <Stack direction="column" spacing={2}>
            <TextField label="Name*" id="name" sx={{ padding: '5px' }} onChange={handleChange} />
            <TextField label="MobileNumber*" id="mobileNumber" sx={{ padding: '5px' }} onChange={handleChange} />
            <TextField label="Office Number" id="officeNumber" sx={{ padding: '5px' }} onChange={handleChange} />
            <TextField label="Email" id="email" sx={{ padding: '5px' }} onChange={handleChange} />
            <TextField label="Address" id="address" sx={{ padding: '5px' }}
              onChange={handleChange}
              inputProps={{
                style: {
                  height: '60px'
                }
              }}
            />
          </Stack>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: '5px' }}
            onClick={() => { handleSave(formData); handleClose() }}
            disabled = {disabled}
          >Save</Button>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
