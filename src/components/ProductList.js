import React, {useState, useEffect} from "react";
//import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { getallProduct } from "../service/productService";
import { addToCart } from "../reduxtoolkit/actions/cartActions";
import { useDispatch } from "react-redux";


function ProductList (props){
  const dispatch = useDispatch();
  const { title, price,description,category, image,quantity} = props;

    const [inputProduct,setProduct]=useState([]);
 console.log(props.input);
    useEffect(()=>{
        getProduct();
    });

    const getProduct = async () =>{
      const response = await getallProduct();
      console.log(response);
      const filteredData =  response.data.filter((el) => {
      
          if (props.input.trim() === '') {
              return el;
          } else {
              console.log(el);
              return el.title.toLowerCase().includes(props.input.trim());
          }
      })
      setProduct(filteredData);
  }
    return (
  
<div class="container py-2">
{/* <div class="text-center">   <h4 >Products Details</h4></div> */}
<div class="row">
{inputProduct.map((prod)=>(
  <div class="col-md-12 col-xl-6">
    <div class="card shadow-0 border rounded-3">
   
      <div class="card-body"  key={prod.id}>
      
        <div class="row">
          <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
            <div class="bg-image hover-zoom ripple rounded ripple-surface">
              <img src={prod.image}
              alt={prod.title}
                class="w-100" />
              <a href="#!">
                <div class="hover-overlay">
                  <div class="mask" ></div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6">
            <h5>{prod.title}</h5>
            <div class="d-flex flex-row">
            <span>{prod.rating.rate}-Rate</span>
              <div class="text-danger mb-1 me-2">
              <i class="fa-solid fa-star"></i>
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
              <i class="bi bi-star"></i>
              </div>
              <span>{prod.rating.count}(Review)</span>
            </div>
            
            <div class="mb-2 text-muted small">
              {/* <span>Unique design</span> */}
              <span class="text-primary"> • </span>
              <span>{prod.category}</span>
              <span class="text-primary"> • </span>
              {/* <span>Casual<br /></span> */}
            </div>
            <p class="text-truncate mb-4 mb-md-0">
            {prod.description}
            </p>
          </div>
          <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
            <div class="d-flex flex-row align-items-center mb-1">
              <h4 class="mb-1 me-1">${prod.price}</h4>
              {/* <span class="text-danger"><s>${prod.price}&times;5</s></span> */}
            </div>
            <h6 class="text-success">Free shipping</h6>
            <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-primary btn-sm" type="button">Details</Link>
              <button class="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => dispatch(addToCart({ ...props }))}>
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
  ))}
</div>
</div>
        
)}



export  default ProductList;