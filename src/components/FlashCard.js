import React from 'react'

import '../assets/styles/flashcard.css'
import flipFlash from '../assets/images/ZapRecall-Recursos/setinha.png';
import redicon from '../assets/images/ZapRecall-Recursos/wrong.svg';
import yellowicon from '../assets/images/ZapRecall-Recursos/interrogation.png';
import greenicon from '../assets/images/ZapRecall-Recursos/right.svg';



export default function FlashCard ({question, answer, setClick, setFinal, setFinalIcon, setCount, count, setIcon, icon, setCheck, click}) {
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
                            setCheck(1);
                            setClick(click + 1);
                            setFinal('redname');
                            setFinalIcon(redicon);
                            setCount(count + 1);
                            setIcon([...icon, redicon]);
                            }
                            } className='button red'>Não lembrei</div>
                        <div onClick={() => {
                            setClick(click + 1);
                            setFinal('yellowname');
                            setFinalIcon(yellowicon);
                            setCount(count + 1);
                            setIcon([...icon, yellowicon]);
                            }
                            } className='button yellow'>Quase não lembrei</div>
                        <div onClick={() => {
                            setClick(click + 1);
                            setFinal('greenname');
                            setFinalIcon(greenicon);
                            setCount(count + 1);
                            setIcon([...icon, greenicon]);
                            }
                            } className='button green'>Zap!</div>
                    </div>
                </div> 
            </div>
           
        </>
    )
}