import React, { useState } from 'react'

const PopulargenList = ({index,moviedata}:any) => {
    const [isHovered, setisHovered] = useState(false);
  return (
    <div
    className="popu__wide__item"
    onMouseEnter={() => setisHovered(true)}
    onMouseLeave={() => setisHovered(false)}
  >
    <img
      src={moviedata.image}
      alt="anupama"
    />
    
   
  </div>
  )
}

export default PopulargenList