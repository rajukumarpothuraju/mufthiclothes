import React from 'react';
import './HeaderComponent.css';
import { BsSearch, BsPerson, BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-white fixed-top">
        <div className=" main-nav container-fluid d-flex justify-content-start align-items-center">
          {/* Toggle button left */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Brand right side of toggle */}
          <button
            className="navbar-brand btn btn-link p-0 m-0"
            type="button"
          >
          <img
        src="/mufthiclothimage.png"  // Replace with your logo file path or import
       alt="Logo"
       style={{ height: '50px',heightRatio: 1, marginRight: '10px' }}  // Adjust size and spacing
  />
          </button>
     

     {/* header lo icons ivi */}
          <div className="headericons ms-auto d-flex justify-content-end">
            
         <BsSearch size={20} style={{ cursor: 'pointer', marginRight: '15px' }} />
            <BsPerson size={20} style={{ cursor: 'pointer', marginRight: '15px' }} />
            <BsCart size={20} style={{ cursor: 'pointer' }} />

          </div>



        </div>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              {/* Removed "Menu" text as per previous request */}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* Offcanvas Body with Fresh Navlinks */}
          <div className="offcanvas-body p-0">
            <ul
              className=" alllist navbar-nav flex-column flex-grow-1 pe-3"
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <li className="nav-item"><Link to="/">Home</Link></li>

              <li className="nav-item"><Link to='/SpringSummer'>SpringSummer</Link></li>
              <li className="nav-item"><Link to='/Shirts'>Shirts</Link></li>
              <li className="nav-item"><Link to='/Jeans'>Jeans</Link></li>
              <li className="nav-item"><button className="nav-link btn btn-link" type="button">Sale Flat 50% Off</button></li>
            </ul>
          </div>
        </div>
      </nav>
  
{/* discount coupon */}
<div className="  discount row  mt-5">
  <div className=" maindiscount col-md-12 col-sm-12 col-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
    <h1>Flat 50% off</h1>

  </div>
</div>




    </div>
   
  );
};

export default Navbar;