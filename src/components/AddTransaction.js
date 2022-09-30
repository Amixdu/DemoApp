import React from 'react';
import { Formik } from 'formik';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddTransaction = () => {
    return (
        <Box sx={{
            mt: 4
        }}>
            <Typography variant='h6' color="common.white">Add Transaction</Typography>
            <Formik
                initialValues={{ 
                    title: '',
                    amount: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <TextField
                            sx={{
                                input: {
                                  background: "white"
                                },
                                mb: 1
                            }}
                            label="Title" 
                            variant="filled"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.title}
                            name="title"
                        />
                        <br />
                        <TextField
                            sx={{
                                input: {
                                    background: "white"
                                },
                                mb: 1
                            }}
                            label="Amount" 
                            variant="filled"
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.amount}
                            name="amount"
                        />
                        <br />
                        {props.errors.title && <div id="feedback">{props.errors.title}</div>}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </Box>
    )
};

export default AddTransaction;