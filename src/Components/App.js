import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";
import Dashboard from "../Pages/Dashboard";
import NewTransaction from "../Pages/NewTransaction";
import SingIn from "../Pages/SignIn";
import SingUp from "../Pages/SignUp";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/">
              <SingIn />
            </Route>

            <Route exact path="/sign-up">
              <SingUp />
            </Route>

            <Route exact path="/client/transactions">
              <Dashboard />
            </Route>

            <Route exact path="/client/transactions/new/:op">
              <NewTransaction />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
