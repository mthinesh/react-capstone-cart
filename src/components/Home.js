import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { getallProduct } from '../service/productService';
import { Link } from 'react-router-dom';

function Home() {
  const [inputProduct,setProduct]=useState([]);
     useEffect(()=>{
         getProduct();
     });
 
     const getProduct = async () =>{
       const response = await getallProduct();
       console.log(response.data);
       setProduct(response.data);
   }
  return (
    <>

    <Carousel data-bs-theme="dark">
    {inputProduct.slice(6, 7).map((prod)=>(
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={prod.image}
          alt="First slide"
        />
        <Carousel.Caption>
       
          <h5>{prod.title}</h5>
          <p>{prod.description}</p>
          <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-outline-primary btn-sm mt-2" type="button">More Details</Link>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      {inputProduct.slice(15, 16).map((prod)=>(
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={prod.image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{prod.title}</h5>
          <p>{prod.description}</p>
          <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-outline-primary btn-sm mt-2" type="button">More Details</Link>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      {inputProduct.slice(19, 20).map((prod)=>(
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={prod.image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{prod.title}</h5>
          <p>
           {prod.description}
          </p>
          <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-outline-primary btn-sm mt-2" type="button">More Details</Link>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
<br/>
{/* {inputProduct.slice(1, 2).map((prod)=>( */}
<CardGroup>
{inputProduct.slice(0, 1).map((prod)=>(
      <Card>
        <Card.Img variant="top" src={prod.image} height="250" />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
        </Card.Body>
        <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-primary btn-sm" type="button">Details</Link>
              {/* <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                Add to wishlist
              </button> */}
            </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       ))}
       {inputProduct.slice(18, 19).map((prod)=>(
      <Card>
        <Card.Img variant="top" src={prod.image} height="250"  />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
          {prod.description}{' '}
          </Card.Text>
          <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-primary btn-sm" type="button">Details</Link>
              {/* <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                Add to wishlist
              </button> */}
            </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2 hours ago</small>
        </Card.Footer>
      </Card>
      ))}
      {inputProduct.slice(2, 3).map((prod)=>(
      <Card>
        <Card.Img variant="top" src={prod.image} height="250" />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
          {prod.description}
          </Card.Text>
        </Card.Body>
        <div class="d-flex flex-column mt-4">
             <Link  component={Link} to={`/viewproduct/${prod.id}`} class="btn btn-primary btn-sm" type="button">Details</Link>
              {/* <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                Add to wishlist
              </button> */}
            </div>
        <Card.Footer>
          <small className="text-muted">Last updated 5 hours ago</small>
        </Card.Footer>
      </Card>
      ))}
    </CardGroup>
    
</>
  );
}

export default Home;