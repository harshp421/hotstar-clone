import React, { useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { list } from '../../data/data';
import SmalllistItem from './SmalllistItem';

const SmallSlider = ({setMovieData}:any) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false)
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleSlideLeft = () => {
     
    if(sliderNumber >0)
    {
      setSliderNumber(sliderNumber - 1);
      setSliderPosition((prevPosition) => prevPosition + 10);
    }
   
  };

  const handleSlideRight = () => {

    if (sliderNumber <5 ) {
      setSliderNumber(sliderNumber + 1);
      setSliderPosition((prevPosition) => prevPosition - 10);
    }
   
  };
  return (
   
     <>
       <div style={{ width: '100%',height:"50px",  maxWidth: '500px',overflow: 'hidden', position: 'relative' }}
         onMouseEnter={()=>setShowControls(true)}
         onMouseLeave={()=>setShowControls(false)}
       >
      <ArrowBackIosOutlinedIcon
         sx={{ display: !showControls ? "none" : "" }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: '1',
        }}
        onClick={handleSlideLeft}
      />
      <div className='d-flex gap-1' style={{  transition: 'transform 0.3s ease-in-out',transform: `translateX(${sliderPosition}%)`,width:"max-content" }}>
        {/* Your slide content goes here */}
       
       {
        list.map((item,index)=>{
          return <SmalllistItem setMovieData={setMovieData} moviedata={item}  key={index}/>
      })

       }
         
      </div>
      <ArrowForwardIosIcon
       sx={{ display: !showControls ? "none" : "" }}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: '1',
        }}
        onClick={handleSlideRight}
      />
       
    </div>
     </>
  )
}

export default SmallSlider