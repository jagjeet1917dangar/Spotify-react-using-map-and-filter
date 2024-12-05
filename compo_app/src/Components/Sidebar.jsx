import './Sidebar.css'
import Spotify from '../assets/Spotifylogo.png'
import home from '../assets/home.png'
import search from '../assets/search.png'
import Yourlibrary from '../assets/Yourlibrary.png'
import Create1 from '../assets/Create (1).png'
import Liked1 from '../assets/Liked (1).png'
import yourepisodes from '../assets/your episodes.png'
import grommeticonsinstalloption from '../assets/grommet-icons_install-option.png'
import toparrownavigation from '../assets/top arrow navigation.png'

function Sidebar(){
    return(
        <>
        <div className="sidebar">
         <div className="image"><img src={Spotify} className='super' alt=""/></div>
         <div className="sidebartext">
            <div><img src={home} alt=""/></div>
            <div><h3>Home</h3></div>
            <div><img src={search} alt=""/></div>
            <div><h3>Search</h3></div>
            <div><img className='bat' src={Yourlibrary} alt=""/></div>
            <div><h3>Your library</h3></div>
         </div>
         <div className="sidebartext2">
            <div><img className='alagthi' src={Create1} alt=""/></div>
            <div><h3 className="hehe">Create Playlist</h3></div>
            <div><img className='alagthi' src={Liked1} alt=""/></div>
            <div><h3 className="hehe">Liked Songs</h3></div>
            <div><img className='alagthi1' src={yourepisodes} alt=""/></div>
            <div><h3 className="hehe">Your episodes</h3></div>
         </div>
         <div className="sidebartext3">
            <div><h3 className="hehe">FAV</h3></div>
            <div><h3 className="hehe">Daily Mix 1</h3></div>
            <div><h3 id='bgt' className="hehe">Discover Weekly</h3></div>
            <div><h3 className="hehe">Malyalam</h3></div>
            <div><h3 id='from' className="hehe">Dance/Electronics Mix</h3></div>
            <div><h3 className="hehe">EDM Popular</h3></div>
            <div className='adele'><img height="20px'" src={grommeticonsinstalloption} alt=""/><h3 id='itsme' className="hehe">Install App</h3></div>
         </div>
         <div id="image">
            <img className='rolling' src={toparrownavigation} alt=""/>
         </div>
    </div>
        </>
    )
}

export default Sidebar