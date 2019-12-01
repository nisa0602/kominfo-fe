import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';

import Homepage from './component/homepage';
import Gastype from './component/Gastype';
import Payment from './component/payment';
import Gaslist from './component/gasList'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Route exact path='/gas' component={Gastype} />
          <Route exact path='/payment' component={Payment} />
        </Router>
        <Homepage/>
        <Gastype/>
        <Gaslist/>
      </div>
    </div>
  );
}

export default App;
