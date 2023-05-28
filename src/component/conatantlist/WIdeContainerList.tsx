import React, { useState } from 'react'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import video from '../../assets/videos/marvel.mp4'


const WIdeContainerList = ({index,moviedata}:any) => {
    const [isHovered, setisHovered] = useState(false);
    const [volumn, setVolumn] = useState(false);
    const handlesound=()=>{
         setVolumn(!volumn);
    }
  return (
    <div
    className="wide__item"
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
  >
    <img
      src={moviedata.image}
      alt="anupama"
    />
    <div className="wide__item__description">
            Ittoop, Kochuthresiamma's happiness 
          </div>
          
   {
    isHovered && (
        <>
          <div className="wide__hover">
            <div className="image-video-container">
                <img src={moviedata.image} alt="" />
           
            <video src={moviedata.video} autoPlay={true} loop muted/>
            </div>
            <div className="wide__video__logo d-flex justify-content-between">
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

     <div className="wide__item__container  d-flex flex-column">
         
          <div className="item__description pt-1">
            Ittoop, Kochuthresiamma's happiness knows no bounds as it's
            their youngest granddaughter's engagement
          </div>
          
        </div>
          </div>
        </>
    )
   }
  </div>
  )
}

export default WIdeContainerList