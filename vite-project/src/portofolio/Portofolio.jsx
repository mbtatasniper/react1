import React from 'react'
import img1 from '../assets/cabin.png'
import img2 from '../assets/cake.png'
import img3 from '../assets/circus.png'
import img4 from '../assets/game.png'
import img5 from '../assets/safe.png'
import img6 from '../assets/submarine.png'

export default function Portofolio() {
    
    return (
        <>
            <div className="container p-5" id='portfolio'>
                
                <h1 className='text-center fw-bolder'>PORTFOLIO</h1>
                <div className="row g-3 ">


                    <div className="col-md-4"><img src={img1} className='w-100 rounded-3' alt="" /></div>
                    <div className="col-md-4"><img src={img2} className='w-100 rounded-3' alt="" /></div>
                    <div className="col-md-4"><img src={img3} className='w-100 rounded-3' alt="" /></div>
                    <div className="col-md-4"><img src={img4} className='w-100 rounded-3' alt="" /></div>
                    <div className="col-md-4"><img src={img5} className='w-100 rounded-3' alt="" /></div>
                    <div className="col-md-4"><img src={img6} className='w-100 rounded-3' alt="" /></div>
                </div>
            </div>
        </>
    )
}
