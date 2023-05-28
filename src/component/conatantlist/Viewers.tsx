import React from 'react'
import marval from '../../assets/videos/marvel.mp4'
import  disney from '../../assets/videos/disney.mp4'
import  national from '../../assets/videos/national-geographic.mp4'
import  pixae from '../../assets/videos/pixar.mp4'
import star from '../../assets/videos/star-wars.mp4'
import  disneyImg from '../../assets/images/viewers-disney.png'
import    marvelImg from '../../assets/images/viewers-marvel.png'
import   nationalImg from '../../assets/images/viewers-national.png'
import   pixarImg from '../../assets/images/viewers-pixar.png'
import    starImg from '../../assets/images/viewers-starwars.png'

const Viewers = () => {
  return (
  <div className="viewer__container">
    <div className="wrap">
        <img src={disneyImg} alt="" className='viewer__image' />
        <video src={disney} className='video_play' autoPlay loop playsInline></video>
    </div> 
    <div className="wrap">
        <img src={marvelImg} alt=""  className='viewer__image' />
        <video src={marval} className='video_play' autoPlay loop playsInline></video>
    </div>
    <div className="wrap">
        <img src={nationalImg} alt=""  className='viewer__image'  />
        <video src={national} className='video_play' autoPlay loop playsInline></video>
    </div>
    <div className="wrap">
        <img src={pixarImg} alt=""   className='viewer__image' />
        <video src={pixae} className='video_play' autoPlay loop playsInline></video>
    </div>
    <div className="wrap">
        <img src={starImg} alt=""  className='viewer__image' />
        <video src={star} className='video_play' autoPlay loop playsInline></video>
    </div>
    <div className="wrap">
        <img src={disneyImg} alt=""  className='viewer__image' />
        <video src={disney} className='video_play' autoPlay loop playsInline></video>
    </div>
  </div>
  )
}

export default Viewers