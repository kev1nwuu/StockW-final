import React, { useState } from 'react';
import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/LogIn.js';
import New from './pages/New.js'
import ShoesDetail from './pages/shoes_detail.js';
import About from './pages/About.js'
import Cart from './compenents/Cart.js';
import CheckoutForm from './pages/CheckoutForm.js';
import Sneakers from './pages/Sneakers.js';
import Shoes from './pages/shoes.js';
import { LanguageContext } from './compenents/LanguageContext.js';


import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductProvider } from './compenents/ProductContext';

function App() {

  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      <ProductProvider>
        <Router>

          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/LogIn">
                <Login />
              </Route>
              <Route path="/New">
                <New />
              </Route>
              <Route path="/shoes_detail">
                <ShoesDetail />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/Cart">
                <Cart />
              </Route>
              <Route path="/CheckoutForm">
                <CheckoutForm />
              </Route>
              <Route path="/sneakers">
                <Sneakers />
              </Route>
              <Route path="/Shoes">
                <Shoes />
              </Route>
            </Switch>
          </div>

        </Router>
      </ProductProvider>
    </LanguageContext.Provider>
  );
}

export default App;
