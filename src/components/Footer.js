import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div class='footer'>
        <div class="d-flex justify-content-between py-1 my-1 border-top  bg-light">
      <p>&copy; {currentYear} PMT Textile, Pvt. All rights reserved.</p>
    
    </div>
    </div>
  )
}
