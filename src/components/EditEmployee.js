import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editEmployee, getallEmployee } from '../service/employeeService';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useForm } from 'react-hook-form';

const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    address: "",
    website: "",
    company: ""
}

const EditEmployee = () => {

    const [emp, setEmployee] = useState(initialValue);
    const {name, username, email, phone,address,website,company} = emp;

    const { id } = useParams();
    const {register, handleSubmit, formState:{errors} } = useForm()
 
    const onFormSubmit = (formData) => {
        console.log(formData)
        editUserDetails();
    }
    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallEmployee(id);
        setEmployee(response.data);
    }

    const history = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setEmployee({...emp, [e.target.name]: e.target.value});
        console.log(emp);
    }

    const editUserDetails = async () =>{
       await editEmployee(id,emp);
       history('/employees');
      // Navigate('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Update Employee Details</Typography>
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input {...register('name', {required:true})} onChange={(e) => onValueChange(e)} name="name" value={name} />
                    {errors?.name?.type==="required" && <p style={{color:'red'}}>* Name is required</p>}
                      
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input  {...register('username', {required:true, pattern:/^[a-zA-Z\s]{8,15}$/})} onChange={(e) => onValueChange(e)} name="username" value={username} />
                    {errors?.username?.type==="required" && <p style={{color:'red'}}>* User Name is required</p>}
                    {errors?.username?.type==="pattern" && <p class='text text-danger'>* Name should be valid & between 8 to 15 chars</p>}
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input  {...register('email', {required:true, pattern:/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim})} onChange={(e) => onValueChange(e)} name="email" value={email} />
                     {errors?.email?.type==="required" && <p style={{color:'red'}}>* Email is required</p>}
                     {errors?.email?.type==="pattern" && <p class='text text-danger'>* Please insert proper email address!</p>}
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                <FormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="address" value={address} />
                </FormControl>
                <FormControl>
                    <InputLabel>Website</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="website" value={website} />
                </FormControl>
                <FormControl>
                    <InputLabel>Company</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="company" value={company} />
                </FormControl>
                <Box my={3}>
                    <button variant="contained"  className='btn btn-primary' align="center"><UpgradeIcon/>Update</button>
                    <button onClick={()=> history("/employees")} variant="contained"  className='btn btn-danger' align="center" style={{margin: '0px 20px'}}><CloseIcon/>Cancel</button>
                </Box>
            </FormGroup>
            </form>
            </Box>
        </Container>
    )
}


export default EditEmployee;