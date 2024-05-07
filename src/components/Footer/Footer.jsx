// import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex">
            <h4>Made by me,</h4>
            <h1>Shimaa Moftah</h1>
        </div>
      
        <p>© 2024-present, All Rights Reserved.</p>

        <div className="icons flex">
        <a href='https://www.linkedin.com/in/shimaa-moftah/' target='_blank' className=" icon-linkedin">
          <span>LinkedIn</span>
          </a>
          <a href='https://github.com/shimaa-moftah13' target='_blank' className="icon icon-github">
          <span>Github</span>
          </a>
          <a href='https://wa.me/+201004939704' target='_blank' className="icon icon-whatsapp">
          <span>Whatsapp</span>
          </a>
        
  </div>



      </footer>

    </>
  )
}

export default Footer