import React from 'react';

import '../assets/styles/reset.css';
import Start from './Start';
import Content from './Content';

export default function App () {
    const arrayDeck =[
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
    const [swap, setSwap] = React.useState(true);
    const[deck, setDeck] = React.useState(arrayDeck);
    console.log(arrayDeck)
    console.log(deck)

    function shuffle () {
        return Math.random() - 0.5;
    }

    function drawFour (arr) {
        for (let i = arr.length; i >4; i--) {
            deck.pop();     
        }
    }

    function start () {
        deck.sort(shuffle);
        drawFour(deck);
    }

    
    return (
        <>
            {swap === true ? <Start start={start} setSwap={setSwap} /> : <Content arrayDeck={arrayDeck} setDeck={setDeck} deck={deck} setSwap={setSwap}/>}|
        </>
    )
}