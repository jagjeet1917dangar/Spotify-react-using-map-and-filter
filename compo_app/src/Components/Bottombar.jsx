import './Bottombar.css'
import image11 from '../assets/image11.png'
import bxbxsheart from '../assets/bxbxsheart.png'
import MusicPlayerOptions from '../assets/MusicPlayerOptions.png'
import Rightoptions from '../assets/Rightoptions.png'

function Bottombar(){
    return(
    <>
    <div className="last">
        <div className="pelu">
        <div className='trigger'><img id='fukra' src={image11} alt=""/><h5>Dreaming on</h5></div>
        <div className='trigger'><img id='finsaan' src={bxbxsheart} alt=""/></div>
        <div className='insaan' ><img id='wander' height="70px" src={MusicPlayerOptions} alt=""/></div>
        <div className='insaan' ><img id='hub' src={Rightoptions} alt=""/></div>
    </div>
    <div className="haha">
        Listening on ASUS-ROG-G53 1GT
    </div>
     </div>
     <div></div>
    </>)
}

export default Bottombar