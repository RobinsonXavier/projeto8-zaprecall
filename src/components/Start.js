import React from 'react';

import '../assets/styles/start.css';
import logo from '../assets/images/ZapRecall-Recursos/logo.png'

export default function Start ({setSwap}) {

    return (
        <>
            <div className='start-page'>
                <div>
                    <img src= {logo} alt='' />
                    <h1>ZapRecall</h1>
                    <button onClick={()=> {
                        setSwap(false)
                    }}>Iniciar Recall!</button>
                </div>
                
            </div>
        </>
    )
}