import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hero from './components/hero'
import Product from './components/product'

function App() {
  return (
    <Router>
      <main className='flex flex-col '>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
