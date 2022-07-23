import '../assets/styles/content.css';
import miniLogo from '../assets/images/ZapRecall-Recursos/logo-pequeno.png';


export default function Content () {
    let contador = 0;
    return (
        <>
            <div className='content'>
                <div>
                    <div className='content-title'>
                        <img src ={miniLogo} alt =''/>
                        <h1>ZapRecall</h1>
                    </div>
                    <div className='content-bottom'>
                        <span>{`0/${contador} CONCLUÍDOS`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}