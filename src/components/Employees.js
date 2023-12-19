import React, {useState} from "react";
import { Link, Outlet } from "react-router-dom";
import { TextField } from "@mui/material";
import List from "./EmployeeList";
import AddIcon from '@mui/icons-material/Add';


const  Employee = ()=>{
  const [inputText, setInputText] =useState("");

  let InputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  
  };
 
    return (
      <>
        <Outlet/>
        <div class="container py-5">
          <div class="container">
          <div class="row">
          <div class="col-9">
     <div><h4 class="text-center">Employees Details</h4></div>
      </div>
     <div class="col-3">
   <div class="text-end">
   <Link  component={Link} to={`/addemployee`}><div  data-toggle="tooltip" title='edit' className='btn btn-primary'><AddIcon/>Add</div></Link> 
   
   </div>
   </div>
   </div>
   </div>
     <div className="search">
        <TextField
          id="outlined-basic"
          onChange={InputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> 
    </div>
        <div class="table-responsive">
      
        <div class="text-center">   </div>
         <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Company</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  <List input={inputText} />
  </tbody>

</table>

</div>  

</>    
)};



export  default Employee;