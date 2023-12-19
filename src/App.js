import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import Header from './components/Header';
import NotFound from './components/NotFound';
import React, { Suspense } from 'react';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';
import Footer from './components/Footer';
const LazyViewProduct = React.lazy(()=> import('./components/ViewProduct'))
const LazyCart = React.lazy(()=> import('./components/Cart'))
const LazyCartHome = React.lazy(()=> import('./components/CartHome'))
const LazyAbout = React.lazy(()=> import('./components/About'))
const LazyEmployees = React.lazy(()=> import('./components/Employees'))
const LazyProducts = React.lazy(()=> import('./components/Product'))
const Lazyregistration = React.lazy(()=> import('./components/RegistrationForm'))

function App() {
  return (
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all" element={<AllUsers/>} />
        <Route path="/edit/:id" element={<EditUser/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/addemployee" element={<AddEmployee/>}/>
        <Route path="/viewproduct/:id" element={<Suspense fallback={<div>Loading....</div>}> <LazyViewProduct/></Suspense>} />
        <Route path="carthome" element={<Suspense fallback={<div>Loading....</div>}> <LazyCartHome/></Suspense>} />
        <Route path="cart" element={<Suspense fallback={<div>Loading....</div>}> <LazyCart/></Suspense>} />
        <Route path="about" element={<Suspense fallback={<div>Loading....</div>}> <LazyAbout/></Suspense>} />
        <Route path="registration" element={<Suspense fallback={<div>Loading....</div>}> <Lazyregistration/></Suspense>} />
        <Route path="employees" element={<Suspense fallback={<div>Loading....</div>}> <LazyEmployees/></Suspense>} ></Route>
        <Route path="/editemployee/:id" element={<EditEmployee/>}/>
        <Route path="products" element={<Suspense fallback={<div class="text-center"> <div class="spinner-border" role="status"> <span class="sr-only">Loading...</span> </div> </div>}> <LazyProducts/></Suspense>} />
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer/>
      </>
      
  );
}

export default App;
