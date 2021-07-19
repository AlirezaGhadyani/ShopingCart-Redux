import React from 'react';
import GlobalStyles from './Assets/Styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Global/Header/Header';
import Home from './Components/Pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
