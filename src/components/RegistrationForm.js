import React from 'react'
import {useForm} from 'react-hook-form'
 
export default function RegistrationForm () {
    const {register, handleSubmit, formState:{errors} } = useForm()
 
    const onFormSubmit = (formData) => {
        console.log(formData)
    }
  return (
    <>
     
      
      <form onSubmit={handleSubmit(onFormSubmit)}>
      <div class="d-flex justify-content-center">
      <div class='input-group w-auto'> 
       <label> ProductName: </label> <input {...register('productName', {required:true, pattern:/^[a-zA-Z\s]{8,15}$/})} class="form-control"/>
        {errors?.productName?.type==="required" && <p style={{color:'red'}}>* Product Name is required</p>}
        {errors?.productName?.type==="pattern" && <p class='text text-danger'>* Product Name should be valid & between 8 to 15 chars</p>}
       <input type='submit' class="btn btn-primary" name='submit'/>
       </div>
       </div>
      </form>
     
    
    </>
  )
}