import React from 'react';

import '../assets/styles/card.css';
import arrowButton from '../assets/images/ZapRecall-Recursos/Vector1.svg';
import FlashCard from './FlashCard';
import FinalCard from './FinalCard';


export default function Card ({question, answer, number}) {
    const [flip, setFlip] = React.useState(true);
    const[click, setClick] = React.useState('');
    const [final, setFinal] = React.useState('');
    const [finalIcon, setFinalIcon] = React.useState('');

    let flashcard = < FlashCard click={click} setClick={setClick} question ={question} 
                    answer={answer} setFinal={setFinal} setFinalIcon={setFinalIcon}/>;

    if (click !== '') {
        flashcard = <FinalCard number= {number} finalIcon={finalIcon} final={final}/>;
    }
    return (
        <> {flip ? 
                <div className="card">
                    <span>Pergunta {number+1}</span>
                    <img onClick={() => setFlip(false)} src={arrowButton} alt=''/>
                </div> : (flashcard)
        }
            
        </>
    )
}