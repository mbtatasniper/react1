import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 ">
                <input className='form-control m-3' type="text" placeholder='Name'/>
                <input className='form-control m-3' type="text" placeholder='Email Address'/>
                <input className='form-control m-3' type="text" placeholder='Phone Number'/>
                <input className='form-control m-3' type="text" placeholder='Message'/>
                <button className='btn btn-success p-3'>Send </button>
            </div>
        </div>
    </div>
    </>
  )
}
