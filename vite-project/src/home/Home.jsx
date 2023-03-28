import React from 'react'
import img from '../assets/avataaars.svg'
import style from './home.module.css'

export default function Home() {
  return (
    <>
    <div className={`${style.bg} `}>
    <div className={`container h-100`}>
      <div className='row justify-content-center text-center text-white p-5 '>
        <div className='col-md-6 m-auto'>
      <img src={img} alt="" className='w-50 ' />
      <h1 className='p-5 fs-1 fw-bolder'>START REACT</h1>
      <h2>Graphic Artist - Web Designer - Illustrator</h2>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}
