import Header from './components/Header'
import Signup from './components/Signup'
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route path='/signup'> 
            <Signup/>
          </Route>
          <Route path='/'>
            <Homepage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App
