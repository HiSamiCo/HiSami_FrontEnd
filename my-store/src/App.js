import Header from './components/Header'
import Signup from './components/Signup'
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import StripeContainer from './components/StripeContainer';
import "./css/reset.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/signup'> 
          <Signup/>
        </Route>
        <Route path='/pay'>
          <StripeContainer/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App
