import React from 'react';

import '../assets/styles/card.css';
import arrowButton from '../assets/images/ZapRecall-Recursos/Vector1.svg';
import FlashCard from './FlashCard';


export default function Card ({question, answer, number}) {
    const [flip, setFlip] = React.useState(true);
    

    return (
        <> {flip ? 
                <div className="card">
                    <span>Pergunta {number+1}</span>
                    <img onClick={() => setFlip(false)} src={arrowButton} alt=''/>
                </div> : < FlashCard question ={question} answer={answer}/>
        }
            
        </>
    )
}