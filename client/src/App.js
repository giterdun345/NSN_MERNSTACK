import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header'
import RandomLayout from './components/random_list/RandomLayout'
import ProductDetail from './components/detail_nsn/ProductDetail'
import PathNotFound from './components/PathNotFound';

import './App.css'

const App = ()=> {  
  return (
    <Router forceRefresh={true}>
      <Header />
        <Switch>
          <Route exact path='/' component={RandomLayout} />
          <Route exact path='/nsn/:nsn' component={ProductDetail} />
          <Route component={PathNotFound} />
        </Switch>
    </Router>
  );
}

export default App;
