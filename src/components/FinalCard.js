
import '../assets/styles/finalcard.css';

export default function FinalCard ({number, finalIcon, final}) {
    return (
        <>
            <div className="finalcard">
                    <span className={final}>Pergunta {number+1}</span>
                    <img src={finalIcon} alt=''/>
            </div>
        </>
    )
}