import './Mainmenu.css'
import image1 from '../assets/image1.png'
import downarrow from '../assets/downarrow.png'
import image4 from '../assets/image4.png'
import image3 from '../assets/image3.png'
import image2 from '../assets/image2.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import imagei from '../assets/Liked (1).png'


function Mainmenu(){
    const data=[
        {id:1, src: imagei, text: "Liked Songs"},
        {id:2, src: image4, text: "Neffex Playlist"},
        {id:3, src: image3, text: "K/DA"},
        {id:4, src: image1, text: "Liked Songs"},
        {id:5, src: image2, text: "Dance/Electronic Mix"},
    ];

    const data2=[
        {id: 1, src:image9, text:"Weekly Motivation"},
        {id: 2, src:image8, text:"MEDITATION SELF"},   
        {id: 3, src:image7, text:"Words beyon acto.."}, 
        {id: 4, src:image6, text:"The alexa show in"}, 
        {id: 5, src:image5, text:"The stories of mine"},
        {id: 6, src:image10, text:"Motivation daily..."},                                       
    ]
    return(
    <>
    <div class="arrowdown">
        <div><h1 className='gata'>Good Morning</h1></div>
        <div></div>
        <div className='boi'><img className='dua' src={image1} alt=""/><p>Angel</p></div>
        <div className='lipa'><img src={downarrow} alt=""/></div>
        {/* <div className="hi">
            <img className='rukh' src={Liked1} alt=""/><h4>Liked Songs</h4>
        </div>
        <div className="hi">
            <img className='rukh' src={image4} alt=""/><h4>Neffex Playlist</h4>
        </div>
        <div className="hi">
            <img className='rukh' src={image3} alt=""/><h4>K/ DA</h4>
        </div>
        <div clasName="hi" id='color'>
            <img className='rukh' src={image1} alt=""/><h4>Liked Songs</h4>
        </div>
        <div clasName="hi" id='color'>
            <img className='rukh' src={image2} alt=""/><h4 className='khan'>Dance/Electronic<br/>Mix</h4>
        </div> */}
        {data.map((detail) =>
       (
         <div className='hi' key={detail.id}>
          <img className='rukh'src={detail.src}/>
          <h4>{detail.text}</h4>
         </div>
      )
     )}
     </div>
     <div class="images">
        <div><h2 className='show'>Shows You might Like </h2></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* <div className="hu"><img className='haar' src={image9} alt=""/><h4 className='mine' >Weekly Motivation</h4></div>
        <div className="hu"><img className='haar' src={image8} alt=""/><h4 className='mine' >MEDITATION SELF</h4></div>
        <div className="hu"><img className='haar' src={image7} alt=""/><h4 className='mine' >Words beyon acto..</h4></div>
        <div className="hu"><img className='haar' src={image6} alt=""/><h4 className='mine' >The alexa show in</h4></div>
        <div className="hu"><img className='haar' src={image5} alt=""/><h4 className='mine' >The stories of mine</h4></div>
        <div className="hu"><img className='haar' src={image10} alt=""/><h4 className='mine'>Motivation daily..</h4></div> */}
        {data2.map((detail) =>
       (
         <div className='hu' key={detail.id}>
          <img className='haar'src={detail.src}/>
          <h4 className='mine'>{detail.text}</h4>

         </div>
      )
     )}
     {/* {data2.map((detail) =>
       (
         <div className='hu' key={detail.id}>
          <img className='haar'src={detail.src}/>
          <h4 className='mine'>{detail.text}</h4>

         </div>
      )
     )} */}
     </div>
    </>)
}

export default Mainmenu