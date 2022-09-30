import React from 'react'
import TextField from '@mui/material/TextField';
import { ErrorMessage } from 'formik';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

const Field = ({ label, name, type, value, change, blur, error}) => {
  return (
    <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
      }}
    >
      <TextField
          sx={{
              input: {
                  background: "white"
              },
              // mb: 1
          }}
          label={label}
          variant="filled"
          type={type}
          onChange={change}
          onBlur={blur}
          value={value}
          name={name}
      />

      <Typography sx={{ color: "#b0bec5" }}>
        {error}
      </Typography>

      
      {/* <ErrorMessage name={name} /> */}
    </Box>
    
  )
}

export default Field
