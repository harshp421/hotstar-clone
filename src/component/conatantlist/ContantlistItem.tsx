import React,{useState} from 'react'
import video from '../../assets/videos/marvel.mp4'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';

const ContantlistItem = ({index,moviedata}:any) => {
    const [isHovered, setisHovered] = useState(false);
    const [volumn, setVolumn] = useState(false);
  const handlesound=()=>{
       setVolumn(!volumn);
  }
  return (
   <>
    <div
        className="list__item "
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
      >
        <img
          src={moviedata.image}
          alt="anupama"
        />

       {
        isHovered && (
            <>
              <div className="hover">
                <div className="image-video-container">
                    <img src={moviedata.image} alt="" />
               
                <video src={moviedata.video} autoPlay={true} loop muted/>
               
                </div>
                <div className="video__logo d-flex justify-content-between">
               <div>

               
                <img src={moviedata.logo} alt="" className='img-fluid' />
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
         <div className="item__container  d-flex flex-column">
              <div className="item__button d-flex">
                <button className="main__button watch__btn"> Watch Now</button>
                <button className="main__button plus__btn"> +</button>
              </div>
              <div className="item__specification">
              
                <span>2023</span> •<span> 2h 42m </span>•<span>4 Language</span>
                •<span>U/A 13+</span>
              </div>
              <div className="item__description">
                Ittoop, Kochuthresiamma's happiness knows no bounds as it's
                their youngest granddaughter's engagement
              </div>
              
            </div>
              </div>
            </>
        )
       }
      </div>
   </>
  )
}

export default ContantlistItem