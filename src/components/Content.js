import React from 'react';

import '../assets/styles/content.css';
import miniLogo from '../assets/images/ZapRecall-Recursos/logo-pequeno.png';
import happy from '../assets/images/ZapRecall-Recursos/party.png';
import sad from '../assets/images/ZapRecall-Recursos/sad.png'

import Card from './Card';
import FinalBottom from './FinalBottom';


export default function Content () {
    const[count, setCount] = React.useState(0);
    const[icon, setIcon] = React.useState([]);
    const[check, setCheck] = React.useState(0);
    const deck =[
        {
            question:'O que é JSX ?',
            answer:'Uma extensão de linguagem do JavaScript'
        },
        {
            question:'O React é __',
            answer:'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question:'Componentes devem iniciar com __',
            answer:'letra maiúscula'
        },
        {
            question:'Podemos colocar __ dentro do JSX',
            answer:'expressões'
        },
        {
            question:'O ReactDOM nos ajuda __ ',
            answer:'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question:'Usamos o npm para __',
            answer:'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question:'Usamos props para __',
            answer:'passar diferentes informações para componentes '
        },
        {
            question:'Usamos estado (state) para __',
            answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ];

    const finalDeck = [];
    let finalBottom = '';

    if(check !== 1) {
        finalBottom = <FinalBottom icon={icon} count={count} img = {happy} title={'Parabéns!'} text = {'Você não esqueceu de nenhum flashcard!'}/>
    } else {
        finalBottom = <FinalBottom icon={icon} count={count} img = {sad} title={'Putz...'} text = {'Ainda faltam alguns...  Mas não desanime!'}/>
    }

    function shuffle () {
        return Math.random() - 0.5;
    }

    function drawFour (arr) {
        for (let i = 0; i < (arr.length) / 2; i++) {
            finalDeck.push(arr[i]);     
        }
    }

    deck.sort(shuffle);
    drawFour(deck);

    
    return (
        <>
            <div className='content'>
                <div>
                    <div className='content-title'>
                        <img src ={miniLogo} alt =''/>
                        <h1>ZapRecall</h1>
                    </div>
                    {finalDeck.map((deck, index) =>
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