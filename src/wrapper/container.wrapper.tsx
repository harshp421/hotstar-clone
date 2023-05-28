import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import facebook from '.././assets/facebooka.png'
import twitter from '.././assets/twitter.png'
const Container = ({children}:any) => {
  return (
    <>
   
     <div className='container-fluid'>
      <div className="row">
        <div className="col-1 g-0 sidebar"> 
           <Sidebar/>
        </div>
        <div className="col-11 g-0">
        {children}

        <div className="wrapper navbar row">
        <div className="col-3">
          <span>company</span>
          <p>about Us</p>
          <p>careers</p>
          <p 
           style={{marginTop:"45px"}}
           >&#9400; 2023 STAR.All Right Reserve </p>
           <p> terms of use
        Privacy policy
        FAQ</p>
        </div>
        <div className="col-3">
          <span>view Website in </span>
          <p style={{paddingBottom:"93px"}}>English</p>
        </div>
        <div className="col-3">
          <span>Need Help?</span>
          <p>visit help Center </p>
          <p style={{paddingBottom:"70px"}}>Share feedback</p>
        </div>
        <div className="col-3 text-end d-flex flex-column">
          <span 
           
           >Connect With us </span>
          
          <div  style={{marginBottom:"40px",marginRight:"20px"}} className='d-flex justify-content-end'>
          <img className='logo' src={facebook} alt="" />    
          <img className='logo' src={twitter} alt="" />    
          </div>
          
           <div className="d-flex w-50 dawnload">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_2048/v1661346101/google-playstore"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_2048/v1661346071/ios-appstore"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
       

     </div>
    
    </>
  )
}

export default Container