import React from 'react'
import style from './footer.module.css';


export default function Footer() {
    return (
        <>
            <div className={style.bg1}>
                <div className="container text-white p-5">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <h3>Location</h3>
                            <p>2215 John Daniel Drive
                                Clark, MO 65243 </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Around the Web</h3>
                        </div>
                        <div className="col-md-4">
                            <h3>About Freelancer</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${style.bg2} text-white text-center p-5`}>Copyright © Your Website 2021</div>
        </>
    )
}
