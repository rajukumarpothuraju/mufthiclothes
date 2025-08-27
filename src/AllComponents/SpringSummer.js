import React from 'react'
import Footer from './Footer';

const SpringSummer = () => {
 
  const products = [
    { id: 1, title: "brgin resort Shirt", price: 499, img: "begin resort shirt.jpg" },
    { id: 2, title: "T-Shirt", price: 299, img: "brown acid washtshirt.jpg" },
    { id: 3, title: "Digital print shirt", price: 999, img: "digitalprintshirt.jpg" },
    { id: 4, title: "t-shirt", price: 1999, img: "meroon ombregrape tshirt.jpg" },
    { id: 5, title: "White shirt", price: 1499, img: "off whiteshirt.jpg" },
    { id: 6, title: "pinky daddy shirt", price: 799, img: "pinkdaddyimg1.webp" },
    { id: 7, title: "printpolo tshirt", price: 899, img: "placementprintpolo.jpg" },
    { id: 8, title: "plain tshirt", price: 199, img: "plaintshirt.jpg" },
    { id: 9, title: "shirt", price: 399, img: "begin resort shirt.jpg" },
    { id: 10, title: "shirt", price: 2499, img: "brown acid washtshirt.jpg" }
  ];

  return (
    <>
     

      {/* 🔹 Responsive Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                position: "relative",
                background: "#fff",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              {/* 50% OFF Box */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "red",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                50% OFF
              </div>
            </div>
          );
        })}
      </div>
   <Footer/>


    </>
  );
};
export default SpringSummer