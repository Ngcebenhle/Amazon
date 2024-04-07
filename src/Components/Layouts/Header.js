import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import shoppingContext from "../../Context/shopping/shoppingContext";
import { auth } from "../../firebase";

const Header = () => {
  const shop = useContext(shoppingContext);
  const { basket, user } = shop;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    // <authcontext.Consumer>
    //  {(ctx) => {
    //   return

    //  }}

    // </authcontext.Consumer>

    <header className="header">
      {/* Logo Image in the link tags */}

      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              className="header_logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9rAwHfpqTvXIi5agZX4MmL_kjB-zAxErDez1ih0Ogw&s"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        <div className="header_search">
          <input className="header_input" type="text" />
          <SearchIcon className="search_icon" />
        </div>
      </div>

      <div className="header_nav">
        {/* Redirect to Sign in page */}
        {/* {ctx.isLoggedIn ?  */}

        <Link to={!user && "/LogIn"}>
          <div
            className="header_options"
            // onClick={ctx.onLogOut}
            onClick={handleAuthentication}
          >
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* :
        <Link to='/LogIn'>
        <div className='header_options'>
            <span className='header_optionOne'>Hellow Guest</span>
            <span className='header_optionTwo'>Sign In</span>
            
        </div>
        </Link>

        } */}

        <div className="header_options">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_options">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="basket" />
            <span className="header_optionTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
