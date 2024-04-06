import {  Route } from "react-router-dom";
import { Redirect, Switch } from 'react-router-dom';
import './App.css';
import { useContext } from "react";
import{ loadStripe } from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Home from './Components/Home'
import Products from './Components/Products'
import Header from './Components/Layouts/Header'
import ProductsDetails from './Components/ProductDetails'
import LogIn from './Components/LogIn';
import NotFound from './Components/NotFound';
import { useEffect } from "react";
import { auth } from "./firebase";
// import CheckOutProducts from "./Components/checkOut/CheckOutProducts";
import Checkout from "./Components/Checkout";
import Payment from './Components/Payment'
import shoppingContext from './Context/shopping/shoppingContext';

const promise = 
loadStripe("pk_test_51KpxTKDntyxdAFDqRJfDQvpUPKWqbuk4Du3RL9shteepxIuKugVVeD6mEcXfeWg8iGmU10YopC54LNkBdRx2LITF00N4Owi63v");

const App = () => {

  
  const shop = useContext(shoppingContext);
  const {setUser} = shop;

 useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      console.log("USER_IS->",authUser);

      if(authUser){
         setUser(authUser)
      }
      else{
        setUser(null)
      }
    })
 },[]); 
  
  return (
    <div className="App">
          
          <Header />

          <main>
        <Switch>

          <Route path = '/' exact>
            <Redirect to = '/home'/>
          </Route>

          <Route path = '/home'>
          <Home/>
          </Route>

          <Route path = '/products' exact>
          <Products/>
          </Route>

          <Route path = '/products/:id'>
          <ProductsDetails/>
          </Route>
 
          <Route path = '/login'>
          <LogIn 
          // onLogIn={logInHandler}
          />
         </Route>

         <Route path = '/checkout'>
          <Checkout/>
          </Route>

          <Route path = '/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path = '*'>
           <NotFound/>
          </Route>


        </Switch>
          </main>
    </div>
  );
}

export default App;
