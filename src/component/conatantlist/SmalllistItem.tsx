import React from 'react'

const SmalllistItem = ({setMovieData,moviedata}:any) => {
  
  const handeclick=()=>{
    setMovieData((prevdata:any)=>{
       return {...prevdata,moviedata}
    })
  }
  return (

    <div className="small__list__item"
    style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
     onClick={handeclick}
    >
   <img src={moviedata.image} alt="" />
    </div>
  )
}

export default SmalllistItem