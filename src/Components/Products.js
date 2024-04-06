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
          id="1"
          tittle="Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
       for
       PC, Mac, Playstation, &Xbox - 1 Year Rescue Service
       (STGX2000400)"
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings="4"
          price="$59.99"
        />

        <Product
          id="1"
          tittle="Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
       for
       PC, Mac, Playstation, &Xbox - 1 Year Rescue Service
       (STGX2000400)"
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings="4"
          price="$59.99"
        />
      </div>

      <div className="products_row">
        <Product
          id="1"
          tittle={`Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
       for
       PC Mac, Playstation, &Xbox - 1 Year Rescue Service
       (STGX2000400)`}
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings="4"
          price="$59.99"
        />

        <Product
          id="1"
          tittle={`Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
       for
       PC Mac, Playstation, &Xbox - 1 Year Rescue Service
       (STGX2000400)`}
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings="4"
          price="$59.99"
        />

        <Product
          id="1"
          tittle={`Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
       for
       PC Mac, Playstation, &Xbox - 1 Year Rescue Service
       (STGX2000400)`}
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings="4"
          price="$59.99"
        />
      </div>

      <div className="products_row">
        <Product
          id={6}
          tittle={`Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0
          for
          PC, Mac, Playstation, &Xbox - 1 Year Rescue Service
          (STGX2000400)`}
          image="https://m.media-amazom.com/images/I/81tjLksKixL._AC_UL320_.jpg"
          tatings={4}
          price={34}
        />
      </div>
    </>
  );
};

export default Products;
