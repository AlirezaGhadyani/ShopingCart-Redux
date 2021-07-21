import React from 'react';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Global/Header/Header';
import Home from './Components/Pages/HomePage/Home';
import SingleProduct from './Components/Global/SingleProduct/SingleProduct'
import Cart from './Components/Pages/CartPage/Cart';
import PurchaseSteps from './Components/Global/PurchaseSteps/PurchaseSteps';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />\
        <Route exact path="/Cart" component={Cart} />
        <Route path="/Cart/PurchaseSteps" component={PurchaseSteps} />
        <Route path="/:product" component={SingleProduct} />
      </Switch>
    </Router>
  );
}

export default App;
