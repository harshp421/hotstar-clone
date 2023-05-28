import React,{useState,useRef}from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ContantlistItem from './ContantlistItem';
import { list } from '../../data/data';
import WIdeContainerList from './WIdeContainerList';
const WideContainer = () => {
    const listRef: any = useRef();
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [showControls, setShowControls] = useState(false)
    const handleClick = (direction: string) => {
      setIsMoved(true);
  
      const distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && sliderNumber > 0) {
        setSliderNumber(sliderNumber - 1);
        listRef.current.style.transform = `translateX(${920 + distance}px)`;
      }
      if (direction === "right" && sliderNumber < 4) {
        setSliderNumber(sliderNumber + 1);
        listRef.current.style.transform = `translateX(${-1100 + distance }px)`;
      } 
    };
  return (
    <div className="list d-flex flex-column
    "
  onMouseEnter={()=>setShowControls(true)}
  onMouseLeave={()=>setShowControls(false)}
>
    <div className="container__title d-flex justify-content-between px-1">
       <h4>Best in sports</h4>
        <h5
          style={{ display: !showControls ? "none" : "" }}
        >View ALL   <ArrowForwardIosIcon
        className=' m-0'
         sx={{
           fontSize:"17px",
            
         }}
         
       
     /> </h5>
    </div>
 <div className="list__wrapper">
    <div 
    className='slider-action left flex'
    style={{ display: !showControls ? "none" : "" }}
     >
    <ArrowBackIosOutlinedIcon
       className='icon'
       onClick={() => handleClick("left")}
       //sx={{ display: !isMoved && "none" }}
       // style={{ display: !isMoved ? "none" : "" }}
     />
    </div>
     <div className="list__container slider" ref={listRef}>
       
       {
           list.map((item,index)=>{
               return <WIdeContainerList moviedata={item} index={index} key={index}/>
           })

           }
      
       
     </div>

     <div 
    className='slider-action  right flex'
    style={{ display: !showControls ? "none" : "" }}
     >
     <ArrowForwardIosIcon
       className="icon"
       sx={{ right: "0" }}
       onClick={() => handleClick("right")}
     />
     </div>
    
   </div>
 </div>
  )
}

export default WideContainer