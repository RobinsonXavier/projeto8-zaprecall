import React from 'react';

import '../assets/styles/start.css';
import logo from '../assets/images/ZapRecall-Recursos/logo.png'

export default function Start () {
    const [click, setClick] = React.useState('start-page');

    return (
        <>
            <div className={click}>
                <div>
                    <img src= {logo} alt='' />
                    <h1>ZapRecall</h1>
                    <button onClick={()=> {
                        setClick('start-page hide')
                    }}>Iniciar Recall!</button>
                </div>
                
            </div>
        </>
    )
}