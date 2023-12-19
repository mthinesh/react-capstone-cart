import React, { useEffect, useState } from 'react';
//import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import {  getallProduct } from '../service/productService';
import {  Link, useNavigate, useParams } from 'react-router-dom';
//import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart, toggleCart } from '../reduxtoolkit/actions/cartActions';
import { useDispatch } from 'react-redux';

const initialValue = {
    title: "",
    price : "",
    description: "",
    category: "",
    image: "",
    rating: [{
        rate:"",
        count:""
    }]
}

const ViewProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(initialValue);
    const {title, price, description, category,image,rating} = product;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    });

    const loadUserData = async () =>{
        const response = await getallProduct(id);
        setProduct(response.data);
        console.log(response.data);
    }

    const history = useNavigate();

   

    return (
        <>
        <div class="container py-5">
<div class="text-center">   <h4 >Products Details</h4></div>
<div class="row justify-content-center mb-3">
  <div class="col-md-12 col-xl-10">
    <div class="card shadow-0 border rounded-3">
      <div class="card-body" >
      
        <div class="row">
          <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
            <div class="bg-image hover-zoom ripple rounded ripple-surface">
              <img src={image}
                class="w-100" />
              <a href="#!">
                <div class="hover-overlay">
                  <div class="mask" ></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6">
            <h5>{title}</h5>
            <div class="d-flex flex-row">
            <span>{rating.rate}-Rate</span>
              <div class="text-danger mb-1 me-2">
              <i class="fa-solid fa-star"></i>
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <i class="bi bi-star"></i>
              </div>
              <span>{rating.count}(Reviews)</span>
            </div>
            
            <div class="mb-2 text-muted small">
              {/* <span>Unique design</span> */}
              <span class="text-primary"> • </span>
              <span>{category}</span>
              <span class="text-primary"> • </span>
              {/* <span>Casual<br /></span> */}
            </div>
            <p class="text-truncate mb-4 mb-md-0">
            {description}
            </p>
          </div>
          <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
            <div class="d-flex flex-row align-items-center mb-1">
              <h4 class="mb-1 me-1">${price}</h4>
              {/* <span class="text-danger"><s>${prod.price}&times;5</s></span> */}
            </div>
            <h6 class="text-success">Free shipping</h6>
            <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/cart`} class="btn btn-primary btn-sm" type="button"
             onClick={(ev) => {
                dispatch(addToCart({ ...product }))
                dispatch(toggleCart(true))
              }}
             >Buy Now</Link>
              {/* <button class="btn btn-outline-primary btn-sm mt-2" type="button"  onClick={() => dispatch(addToCart({ ...product }))}>
                Add to wishlist
              </button> */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <button onClick={()=> history("/carthome")} variant="contained"  className='btn btn-info' align="center" style={{margin: '0px 20px'}}><ArrowBackIcon/>Back to List</button>

  </div>
</div>
</div>
</>
    )
}


export default ViewProduct;