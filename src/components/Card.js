import '../assets/styles/card.css';
import arrowButton from '../assets/images/ZapRecall-Recursos/Vector1.svg';


export default function Card () {
    return (
        <>
            <div className="card">
                <span>Pergunta</span>
                <img src={arrowButton} alt=''/>
            </div>
        </>
    )
}