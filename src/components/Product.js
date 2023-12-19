import React, {useState} from "react";
import { TextField } from "@mui/material";
import ProductList from "./ProductList";


const Product = ()=>{
    const [product,setProduct]=useState("");

    let InputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      console.log(lowerCase);
      setProduct(lowerCase);
    
    };
    return (
  <>
  <div class="container">
<div class="text-center">   <h4 >Products List</h4></div>
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
<div>
  <ProductList input={product} />  
  </div>  
  </>
  
)};



export  default Product;