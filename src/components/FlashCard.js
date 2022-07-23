import '../assets/styles/flashcard.css'
import flipFlash from '../assets/images/ZapRecall-Recursos/setinha.png'

export default function FlashCard ({question, answer}) {
    return (
        <>
            <div className='flashcard'>
                <span>{question}</span>
                <img src={flipFlash} />
            </div>
        </>
    )
}