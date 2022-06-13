import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton, Stack, Button } from '@mui/material';
import { useForm, FormProvider } from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
import FormInput from './FormInput';
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from './validationSchema'




const TemporaryDrawer = ({ open, handleClose, handleSave }) => {

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const { handleSubmit, formState } = methods;




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
          <Stack direction="column" spacing={4}>
            <FormProvider {...methods}>
              <FormInput
                id="name"
                label="Name"
                name="name"
                required
                errorobj={formState.errors}
              />
              <FormInput
                id="mobileNumber"
                label="MobileNumber"
                name="mobileNumber"
                required
                errorobj={formState.errors}

              />
              <FormInput
                id="officeNumber"
                label="Office Number"
                name="officeNumber"
                errorobj={formState.errors}

              />
              <FormInput
                id="email"
                label="Email"
                name="email"
                errorobj={formState.errors}

              />
              <FormInput
                id="address"
                name="address"
                label="Address"
                inputProps={{
                  style: {
                    height: '60px'
                  }
                }}
                errorobj={formState.errors}

              />
            </FormProvider>
          </Stack>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: '5px' }}
            onClick={handleSubmit(handleSave)}
          >Save</Button>
        </Drawer>
      </React.Fragment>
    </div >
  );
}

export default TemporaryDrawer;
