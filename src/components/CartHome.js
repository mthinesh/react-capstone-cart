import React from 'react';
//import productsData from '../data/productsData';
import Cart from '../components/Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import { getallProduct } from '../service/productService';
import ProductsCard from './ProductsCard';
import { TextField } from '@mui/material';

const CartHome = () => {
    const [inputProduct,setProduct]=useState('');
    const [inputProductSearch,setProductSearch]=useState([]);
   // console.log(props.input);
       useEffect(()=>{
           getProduct();
       });
       let InputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        console.log(lowerCase);
        setProduct(lowerCase);
      
      };
       const getProduct = async () =>{
         const response = await getallProduct();
         console.log(response.data);
        const filteredData =  response.data.filter((el) => {
         
             if (inputProduct.trim() === '') {
                 return el;
             } else {
                 console.log(el);
                 return el.title.toLowerCase().includes(inputProduct.trim());
             }
         })
         setProductSearch(filteredData);
     }
    return (
        <>  <div class="container">
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
            <section id="home">
                <div className="container">
                    <div className="row">
                        {
                            inputProductSearch.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default CartHome;