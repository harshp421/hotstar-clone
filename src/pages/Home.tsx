import React,{useState} from 'react'
import { list } from '../data/data'
import ContantlistContainer from '../component/conatantlist/ContantlistContainer'
import WideContainer from '../component/conatantlist/WideContainer'
import Viewers from '../component/conatantlist/Viewers'
import PopularGens from '../component/conatantlist/PopularGens'

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import SmallSlider from '../component/conatantlist/SmallSlider'
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import list1 from '.././assets/images/list1.webp'
import   logo1  from '.././assets/images/s1logo.webp'
import video1 from '.././assets/videos/disney.mp4'


const Home = () => {
  const [volumn, setVolumn] = useState(false);
  const handlesound=()=>{
    setVolumn(!volumn);
  }
  const [movieData, setMovieData] = useState({
    moviedata:{
        image:list1,
        logo:logo1,
        video:video1
    }
  });

  console.log(movieData,"movie data");
  
  return (
    <>
    
          <div className="wrapper header__add row mt-3 "
           style={{
            backgroundColor:"#16181f"
         }}>
        <div className="col-6">
          <img
            src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-04-27/vsgNS_deskXbb-cc0424ea-2f49-4d70-8eba-809383ee6d46.jpg"
            alt=""
            className="img-fluid banner"
          />
        </div>
        <div className="col-4 "
        
        >
          <div className=" banner__title" >
            <div className="left">
              <img
                src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
                alt=""
                style={{ height: "50px" }}
              />
            </div>
            <div className='right'>
              <p className='banne__subtitle'>Disney + Hotstar </p>
              <p className='banne__subtitle__sec'>Endless Entertainment</p>
            </div>
          </div>
          <p className='desc'>Watch the Best of Entertaintment Now! Only on Disney + Hotstar </p>
          <button className="main__button"> Subscribe</button>
        </div>
       
      </div>
    {/* video container start */}
     <div className='video-container'>
        <video src={movieData?.moviedata?.video} loop autoPlay muted></video>
        <div className="video__content ">
          <div className="movie__title">
            <img src={movieData?.moviedata?.logo} alt="logo" />
          </div>
          <div className="video__item__container  d-flex flex-column">
             
              <div className="video__item__specification">
              
                <span>2023</span> •<span> 2h 42m </span>•<span>4 Language</span>
                •<span>U/A 13+</span>
              </div>
              <div className="item__description">
                Ittoop, Kochuthresiamma's happiness knows no bounds as it's <br/>
                their youngest granddaughter's engagement
              </div>
              <div className="item__specification  d-flex justify-content-between">
               <div>
                  
              <span>Drama</span> |<span> action </span>|<span>4 Language</span>
               </div>
               <div>
                {
                  (volumn===true)? <VolumeUpOutlinedIcon  onClick={handlesound}/>:
                  <VolumeOffOutlinedIcon
                  onClick={handlesound}
                  />
                }
              
               </div>
              
            </div>
            <div className="item__button d-flex justify-content-between">
               <div>
               <button className="main__button watch__btn"> Watch Now</button>
                <button className="main__button plus__btn"> +</button>
               </div>
               <div className="small__container__slider"
                
               >
                
             <SmallSlider setMovieData={setMovieData}/>
                
               </div>
              </div>
            </div>
              <div className="banner__fadebutton">
            
            </div>
        </div>
        
     </div>
     {/* video container end */}
   
    

    <div className='container__slider'>
    
      <ContantlistContainer/>
       <WideContainer/>
       <ContantlistContainer/>
       {/* viewerpost */}
       <Viewers/>
       <PopularGens/>
       <ContantlistContainer/>
       <WideContainer/>
    </div>
    </>
  )
}

export default Home