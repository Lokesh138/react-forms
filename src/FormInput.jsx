import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from '@mui/material';


function FormInput(props) {
    const { control } = useFormContext();
    const { id, label, name, required, errorobj } = props;
    let isError = false;
    let errorMessage = "";
    if (errorobj && errorobj.hasOwnProperty(name)) {
        isError = true;
        errorMessage = errorobj[name].message;
    }


    return (
        <Controller
            name={name}
            render={({ field }) => (
                <TextField
                    fullWidth
                    label={label}
                    id={id}
                    sx={{ paddingTop: '5px', paddingBottom: '10px' }}
                    required={required}
                    InputLabelProps={{
                        className: required ? "required-label" : "",
                        required: required || false,
                    }}
                    error={isError}
                    helperText={errorMessage}
                    {...props}
                    {...field}
                />
            )}
            control={control}
        />
    );
}

export default FormInput;