import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        {/* <h1>Products Page</h1>
      <ul>
          <li>
            <Link to = '/products/:01'>Product 1</Link>
          </li>

          <li>
            <Link to = '/products/:02'>Product 2</Link>
          </li>

          <li>
            <Link to = '/products/:03'>Product 3</Link>
          </li>
          
      </ul>
       */}

        <Product
          id={0}
          tittle="Wireless CarPlay Adapter 2024 Upgraded, Converts Factory Wired CarPlay to Wireless, 
          Plug and Play Car Play Wireless Adapter, Compatible with iPhone Multi-User Seamless Connection"
          image="https://m.media-amazon.com/images/I/611fh2SSclL._AC_UY218_.jpg"
          rating="4"
          price={69.99}
        />

        <Product
          id={1}
          tittle="Mini Projector, VISSPL Full HD 1080P Video Projector, Portable Outdoor Projector with Tripod, Kids Gift, 
          Home Theater Movie Phone Projector Compatible with Android/iOS/Windows/TV Stick/HDMI/USB"
          image="https://m.media-amazon.com/images/I/61kRNDZh8UL._AC_UY218_.jpg"
          rating="4"
          price={49.99}
        />
      </div>

      <div className="products_row">
        <Product
          id={2}
          tittle={`Apple AirPods (2nd Generation) Wireless 
          Ear Buds, Bluetooth Headphones with Lightning Charging 
          Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone`}
          image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UY218_.jpg"
          rating="4"
          price={79.99}
        />

        <Product
          id={3}
          tittle={`TP-Link Tri-Band BE9300 WiFi 7 Router Archer BE550 | 6-Stream 9.2Gbps | 𝗙𝘂𝗹𝗹 𝟮.𝟱𝗚 Ports | USB 3.0 | 6 Smart Internal Antennas | VPN Clients & Server | Easy Mesh, 
          HomeShield, Private IoT Network`}
          image="https://m.media-amazon.com/images/I/61Uj6QU3jBL._AC_UY218_.jpg"
          rating="4"
          price={269.99}
        />

        <Product
          id={4}
          tittle={`Drone with Camera for Adults, 1080P FPV Drones for kids Beginners with Upgrade Altitude Hold, 
          Voice Control, Gestures Selfie, 90° Adjustable Lens, 3D Flips, 2 Batteries`}
          image="https://m.media-amazon.com/images/I/71DCvoMcq7L._AC_UY218_.jpg"
          tatings="4"
          price={59.99}
        />
      </div>

      <div className="products_row">
        <Product
          id={5}
          tittle={`Bose QuietComfort Wireless Noise Cancelling Headphones, 
          Bluetooth Over Ear Headphones with Up To 24 Hours of Battery Life, Black`}
          image="https://m.media-amazon.com/images/I/51QeS0jkx-L._AC_UY218_.jpg"
          rating={4}
          price={349.00}
        />
      </div>
    </>
  );
};

export default Products;
