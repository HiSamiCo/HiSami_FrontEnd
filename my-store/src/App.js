import Header from "./components/common/Header";
import Signup from "./components/pages/signup/Signup";
import Login from "./components/pages/login/Login";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/home/Homepage";
import StripeContainer from "./components/pages/pay/StripeContainer";
import "./css/reset.css";
import AdminDashboard from "./components/admin/AdminDashboard";
import { useEffect } from "react"
import { connect } from "react-redux"
import {getStore} from "./state/actions"


function App(props
) {
  const {getStore} = props;

  useEffect(() => {
getStore()
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/pay">
          <StripeContainer />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/admindash">
          <AdminDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { getStore })(App);
