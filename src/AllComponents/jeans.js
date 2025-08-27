import React from 'react'
import Footer from './Footer';

const Jeansall = () => {
    
  const products = [
    { id: 1, title: "straigh fitjean", price: 499, img: "straightfitjean.jpg" },
    { id: 2, title: "superslimfitjean", price: 299, img: "superslimfitjean.jpg" },
    { id: 3, title: "skinny fit jean", price: 999, img: "skinnyfitjean.jpg" },
    { id: 4, title: "skinny fit jean", price: 1999, img: "skinnyfitjean.jpg" },
    { id: 5, title: "straightfitjean", price: 1499, img: "straightfitjean.jpg" },
    { id: 6, title: "superslimfit jean", price: 799, img: "superslimfitjean.jpg" },
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



export default Jeansall