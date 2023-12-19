import React from 'react'
//import notfound from './pngegg.png'
export default function NotFound() {
  return (
    <div>
            <img src={process.env.PUBLIC_URL +"/pngegg.png"} style={{width:'800px',height:'550px'}} alt="not found"/>
        </div>
  )
}
