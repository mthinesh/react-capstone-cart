import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../service/userService';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const initialValue = {
    name: "",
    username : "",
    password:"",
    email: "",
    phone: "",
}

const AddUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, username,password, email, phone} = user;

    const history = useNavigate();
    const {register, handleSubmit, formState:{errors} } = useForm()
 
    const onFormSubmit = (formData) => {
        console.log(formData)
        addUserDetails();
    }
    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history('/all');
    }

    return (
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add User Details</Typography>
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
                    {errors?.username?.type==="pattern" && <p class='text text-danger'>* User Name should be valid & between 8 to 15 chars</p>}
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input  {...register('password', {required:true, pattern:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/})} onChange={(e) => onValueChange(e)} name="password" value={password} type='password'/>
                    {errors?.password?.type==="required" && <p style={{color:'red'}}>* Password is required</p>}
                    {errors?.password?.type==="pattern" && <p class='text text-danger'>* Password should be valid & Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces</p>}
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
                <Box my={3}>
                    <button variant="contained" className='btn btn-primary' align="center">Add User</button>
                    <button onClick={()=> history("/all")} variant="contained" className='btn btn-danger' align="center" style={{margin: '0px 20px'}}>Cancel</button>
                </Box>
            </FormGroup>
           </form>
            </Box>
        </Container>
    )
}


export default AddUser;