import React from 'react'
import TextField from '@mui/material/TextField';

const Field = ({ label, name, type, value, change, blur}) => {
  return (
    <TextField
        sx={{
            input: {
                background: "white"
            },
            mb: 1
        }}
        label={label}
        variant="filled"
        type={type}
        onChange={change}
        onBlur={blur}
        value={value}
        name={name}
    />
  )
}

export default Field
