import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 
export default function Users() {
  return (
    <>
     <nav>
        <Link to='101'>User-1 |</Link>  
        <Link to='102'>User-2 |</Link>
        <Link to='103'>User-3</Link>
     </nav>
     <Outlet/>
     </>
  )
}