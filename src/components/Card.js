import React from 'react';

import '../assets/styles/card.css';
import arrowButton from '../assets/images/ZapRecall-Recursos/Vector1.svg';
import FlashCard from './FlashCard';
import FinalCard from './FinalCard';


export default function Card ({question, answer, number, setCount, count, setIcon, icon, setCheck}) {
    const [flip, setFlip] = React.useState(true);
    const [click, setClick] = React.useState(0);
    const [final, setFinal] = React.useState('');
    const [finalIcon, setFinalIcon] = React.useState('');


    let flashcard = < FlashCard click={click} setClick={setClick} question ={question}
                    answer={answer} setFinal={setFinal} click = {click}
                    setFinalIcon={setFinalIcon} setCount={setCount} count = {count}
                    icon={icon} setIcon={setIcon} setCheck = {setCheck}/>;

    if (click !== 0) {
        flashcard = <FinalCard number= {number} finalIcon={finalIcon} final={final} />;
    }

    function restrict () {

        if(click === 0) {
            setFlip(false);
            setClick(click + 1);
        }

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