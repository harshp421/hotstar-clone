import React,{useState} from 'react'
import logo from '../../assets/images/logo-d-plus.svg'
import playicon from '../../assets/images/play-icon-white.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Sidebar = () => {
  const [hovered, setHovered] = useState(false);


   const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
       {/* <div className={hovered ? '' : ''}>

       </div> */}
    
         <div className="sidebar__logo">
           <img src={logo} alt="" className='logo1' />
            <a href="" className='logo__text'> subscribe / </a>
         </div>
         <div className=''
      
      >
         <div 
           className={hovered ? 'sidebar__nav backdrop' : 'sidebar__nav '}
         
           
         >
           <nav>
         
            <ul 
             onMouseOver={handleMouseEnter}
             onMouseOut={handleMouseLeave}
             >
                <li><AccountCircleOutlinedIcon className='icon'/> <span  className='search'>my search</span>  </li>
                <li> <SearchIcon className='icon'/><span className='search'>serach</span> </li>
                <li><HomeIcon className='icon dark'/><span className='search'>home</span>  </li>
                <li><TvIcon className='icon'/><span className='search'>Tv</span> </li>
                <li><LiveTvOutlinedIcon className='icon'/><span className='search'>movie</span></li>
                <li><SportsBaseballOutlinedIcon className='icon'/><span className='search'>sports</span> </li>
            </ul>
           </nav>
         </div>
      </div>
    </>
  )
}

export default Sidebar