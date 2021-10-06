import './App.css';
import Header from './components/Header'
import Signup from './components/Signup'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Switch>
          <Route path='/signup'> 
            <Signup/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App
