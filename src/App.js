import React from 'react';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Global/Header/Header';
import Home from './Components/Pages/HomePage/Home';
import SingleProduct from './Components/Global/SingleProduct/SingleProduct'
import Cart from './Components/Pages/CartPage/Cart';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />\
        <Route path="/Cart" component={Cart} />
        <Route path="/:product" component={SingleProduct} />
      </Switch>
    </Router>
  );
}

export default App;
