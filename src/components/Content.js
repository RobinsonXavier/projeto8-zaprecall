import React from 'react';

import '../assets/styles/content.css';
import miniLogo from '../assets/images/ZapRecall-Recursos/logo-pequeno.png';

import Card from './Card';


export default function Content () {
    let contador = 0;
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
                     <Card key={index} number={index} question={deck.question} answer={deck.answer} />)}
                    <div className='content-bottom'>
                        <span>{`0/${contador} CONCLUÍDOS`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}