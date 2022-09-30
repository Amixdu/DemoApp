import React from 'react';
import { Formik } from 'formik';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormField from './FormField';
import { useDispatch } from 'react-redux';
import { addExpense, addIncome } from '../features/account/accountSlice';

const AddTransaction = () => {
    const dispatch = useDispatch()
    return (
        <Box sx={{
            mt: 4
        }}>
            <Typography variant='h6' color="common.white">Add Transaction</Typography>
            <Formik
                initialValues={{ 
                    title: '',
                    amount: '',
                    picked: 'income'
                }}
                onSubmit={(values, actions) => {
                    // console.log(actions)
                    const amt = values.amount;
                    console.log(values.picked)
                    dispatch(values.picked === "income" ? addIncome(amt) : addExpense(amt))
                    actions.resetForm()
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <FormField label="Title" type="text" change={props.handleChange} blur={props.handleBlur} value={props.values.title} name="title" />
                        <br />
                        <FormField label="Amount" type="number" change={props.handleChange} blur={props.handleBlur} value={props.values.amount} name="amount" />
                        <br />

                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" sx={{ color: "white"}} defaultValue="income">
                            <label>
                                <Radio sx={{ color:"whitesmoke",  '&.Mui-checked':{color: "whitesmoke"}}} name="picked" value="income" onChange={props.handleChange}/>
                                Income
                            </label>
                            <label>
                                <Radio sx={{ color:"whitesmoke",  '&.Mui-checked':{color: "whitesmoke"}}} name="picked" value="expense" onChange={props.handleChange}/>
                                Expense
                            </label>
                        </RadioGroup>
                        <br />
                        
                        {props.errors.title && <div id="feedback">{props.errors.title}</div>}
                        <Button type="submit" variant="contained" color="success">Submit</Button>
                    </form>
                )}
            </Formik>
        </Box>
    )
};

export default AddTransaction;