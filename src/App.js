import React from 'react'
import './App.css';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import ProductListin from './ProductListin';
import ProductDetails from './ProductDetails';
import Header from './Header';

function App(props) {
  
  return (
    <>
      
      <Header/>
      <Router>
        
     <Switch>
     <Route path='/' exact component={ProductListin}/>
      <Route path={`/details`} exact component={ProductDetails}/>
      <Route>404 Not Found</Route>
     </Switch>
      
      </Router>
     
    </>
  );
}

export default App;
