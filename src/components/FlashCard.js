import React from 'react'

import '../assets/styles/flashcard.css'
import flipFlash from '../assets/images/ZapRecall-Recursos/setinha.png';
import redicon from '../assets/images/ZapRecall-Recursos/wrong.svg';
import yellowicon from '../assets/images/ZapRecall-Recursos/interrogation.png';
import greenicon from '../assets/images/ZapRecall-Recursos/right.svg';



export default function FlashCard ({question, answer, click, setClick, setFinal, setFinalIcon}) {
    const[flipCard, setFlipCard] = React.useState('');

    return (
        <> 
            <div className={'flashcard ' + flipCard}>
                <div className='front ground'>
                    <span>{question}</span>
                    <img onClick={() => setFlipCard('flip')} src={flipFlash} />
                </div>
                <div className='back ground'>
                    <span>{answer}</span>
                    <div>
                        <div onClick={() => {
                            setClick('1');
                            setFinal('redname');
                            setFinalIcon(redicon);
                            }
                            } className='button red'>Não lembrei</div>
                        <div onClick={() => {
                            setClick('2');
                            setFinal('yellowname');
                            setFinalIcon(yellowicon);
                            }
                            } className='button yellow'>Quase não lembrei</div>
                        <div onClick={() => {
                            setClick('3');
                            setFinal('greenname');
                            setFinalIcon(greenicon);
                            }
                            } className='button green'>Zap!</div>
                    </div>
                </div> 
            </div>
           
        </>
    )
}