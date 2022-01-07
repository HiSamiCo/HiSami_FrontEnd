import Header from './components/Header'
import Signup from './components/Signup'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route path='/signup'> 
            <Signup/>
          </Route>
        </Switch>
    </div>
  );
}

export default App
