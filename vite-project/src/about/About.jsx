import React from 'react'
import style from './about.module.css'

export default function About() {
    return (
        <>
            <div className={style.bg}>
                <h1 className='text-white text-center p-5'>ABOUT</h1>
                <div className="container ">
                    <div className="row text-white">
                        <div className='col-md-3 '></div>
                        <div className="col-md-3 py-5">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        <div className="col-md-3 py-5">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</div>
                    </div>
                </div>
            </div>
        </>
    )
}
