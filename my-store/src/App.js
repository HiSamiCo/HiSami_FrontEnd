import Header from './components/common/Header'
import Signup from './components/pages/signup/Signup'
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/pages/home/Homepage';
import StripeContainer from './components/pages/pay/StripeContainer';
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
