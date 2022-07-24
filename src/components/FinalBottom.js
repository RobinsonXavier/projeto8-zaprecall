import '../assets/styles/finalbottom.css';

export default function FinalBottom({img, text, title, count, icon}) {
    return (
        <>
            <div className="final-bottom">
                <div className='final-title'>
                    <img src={img} alt =''/>
                    <h2>{title}</h2>
                </div>
                <span>{text}</span>
                <span>{`${count}/4 CONCLUÍDOS`}</span>
                <div>
                    {icon.map(element => <img src={element} alt= '' />)}
                </div>
            </div>
        </>
    )
}