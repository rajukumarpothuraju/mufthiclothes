import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function CarouselSlide() {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner1.jpg"
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner2.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner3.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    
   <div className='mt-3'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner4.jpg"
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner5.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/banner6.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    
 </div>





   <div>
<h1 className='text-center'>Categories</h1>
<div className="cardsimages">
  <div className="card-with-text">
    <img src="full slve shirts3.jpg" alt="ad1" className="img-fluid"/>
    <span className="overlay-text">Full Sleeve Shirts</span>
  </div>
  <div className="card-with-text">
    <img src="halfsleveshirtsbanner.jpg" alt="ad2" className="img-fluid"/>
    <span className="overlay-text">Half Sleeve Shirts</span>
  </div>
  <div className="card-with-text">
    <img src="t-shirtsbanner.jpg" alt="ad3" className="img-fluid"/>
    <span className="overlay-text">T-Shirts</span>
  </div>
  <div className="card-with-text">
    <img src="windopnecheckshirt.jpg" alt="ad4" className="img-fluid"/>
    <span className="overlay-text">Window Check Shirt</span>
  </div>
</div>


   </div>
   



   <div className='row mt-3'>
   <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
    <img src="Firstcutbannerimg9.jpg" alt="ad1" className="img-fluid"/>
   </div>
    <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
      <img src="firstcut10.jpg" alt="ad2" className="img-fluid"/>
    </div>

   </div>


<div className='row'>
 <div className='locationicon col-md-6 col-sm-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center '>
<FaMapMarkerAlt size={200}  />

<h1 className='ms-3'><strong>store location</strong></h1>


 </div>

<div className='emailinput col-md-6 col-sm-12 col-lg-6 col-xl-6  '>
   
<div className='emailinput2 d-flex justify-content-center align-items-center flex-column'style={{marginTop:'115px'}} >
<h1 className='text'>like to here from us</h1>
<input type="email" placeholder="Email" className='emailinput' />
<button className='inputbtn'>subscribe</button>
<h className='text'>By entering your email, you are agreeing to Mufti’s Privacy Policy.</h>
</div>
</div>

</div>

</div>
  );
}

export default CarouselSlide;