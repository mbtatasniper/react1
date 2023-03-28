import React from 'react'
import style from './Navbar.module.css'


export default function Navbar() {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-dark p-5 ${style.color}`} >
    <div className="container">
      <a className="navbar-brand text-white  " >START REACT</a>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className=" text-white px-2 text-decoration-none nav-a active" aria-current="page" >Home</a>
          </li>
          <li className="nav-item">
            <a className=" text-white px-2 text-decoration-none nav-a" href='#portfolio'>PORTOFOLIO</a>
          </li>
          <li className="nav-item">
            <a className=" text-white px-2 text-decoration-none nav-a" >ABOUT</a>
          </li>
          <li className="nav-item">
            <a className=" text-white px-2 text-decoration-none nav-a" >CONTACT</a>
          </li>
         </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
