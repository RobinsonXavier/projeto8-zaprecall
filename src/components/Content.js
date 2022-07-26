import React from 'react';

import '../assets/styles/content.css';
import miniLogo from '../assets/images/ZapRecall-Recursos/logo-pequeno.png';
import happy from '../assets/images/ZapRecall-Recursos/party.png';
import sad from '../assets/images/ZapRecall-Recursos/sad.png'

import Card from './Card';
import FinalBottom from './FinalBottom';


export default function Content ({setSwap, deck}) {
    const[count, setCount] = React.useState(0);
    const[icon, setIcon] = React.useState([]);
    const[check, setCheck] = React.useState(0);
   

    let finalBottom = '';

    if(check !== 1) {
        finalBottom = <FinalBottom setSwap={setSwap} setIcon={setIcon} icon={icon} count={count} setCount={setCount} img = {happy} title={'Parabéns!'} text = {'Você não esqueceu de nenhum flashcard!'}/>
    } else {
        finalBottom = <FinalBottom setSwap={setSwap} setIcon={setIcon} icon={icon} count={count} setCount={setCount} img = {sad} title={'Putz...'} text = {'Ainda faltam alguns...  Mas não desanime!'}/>
    }
    
    return (
        <>
            <div className='content'>
                <div>
                    <div className='content-title'>
                        <img src ={miniLogo} alt =''/>
                        <h1>ZapRecall</h1>
                    </div>
                    {deck.map((deck, index) =>
                     <Card key={index} number={index} question={deck.question} answer={deck.answer} 
                     setCount={setCount} count = {count} icon= {icon} setIcon={setIcon} setCheck={setCheck} />)}
                    {count < 4 ? 
                        <div className='content-bottom'>
                            <span>{`${count}/4 CONCLUÍDOS`}</span>
                            <div>
                                {icon.map((element, index) => <img key= {index} src={element} alt= '' />)}
                            </div>
                        </div>
                        : (finalBottom)
                    }
                </div>
            </div>
        </>
    )
}