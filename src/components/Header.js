import React from 'react';
import { Link } from 'react-router-dom';
import FitbitIcon from '@mui/icons-material/Fitbit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../reduxtoolkit/actions/cartActions';

export default function Header() {
  
  const { cart } = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  return (
    
   <>
   <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
  <div class="container-fluid">
    <a class="navbar-brand btn btn-success" alt="PMT Textile" href="/"><FitbitIcon/></a><span>PMT Textile</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <a> <Link to="/" class="nav-link active" aria-current="page">Home</Link></a>
        </li>
        <li class="nav-item">
          <a><Link to="/employees" class="nav-link">Employees</Link></a>
        </li>
        <li class="nav-item">
          <a><Link to="/carthome" class="nav-link">Shop</Link></a>
        </li>
        <li class="nav-item">
          <a><Link to="/cart" class="nav-link"  onClick={() => dispatch(toggleCart(true))}><AddShoppingCartIcon/> {cart.length ? <span class="badge text-bg-danger">{cart.length}</span> : null}</Link></a>
        </li>
         <li class="nav-item">
          <a><Link to="/add" class="nav-link">Sign Up</Link></a>
        </li>
       {/* <li class="nav-item">
          <a><Link to="/registration" class="nav-link">Registration Form</Link></a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
