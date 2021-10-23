import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useState } from 'react';
import Dashboard from '../Pages/Dashboard';
import NewEntry from '../Pages/NewEntry';
import NewExit from '../Pages/NewExit';
import SingIn from '../Pages/SignIn';
import SingUp from '../Pages/SignUp';
import './App.css';

function App() {

  const [user, setUser] = useState([]);

  return (
    <>
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Switch>
            <Route exact path="/">
              <SingIn/>
            </Route>

            <Route exact path="/sign-up">
              <SingUp/>
            </Route>

            <Route exact path="/user/payments">
              <Dashboard/>
            </Route>

            <Route exact path="/user/payments/new/entry">
              <NewEntry/>
            </Route>
            <Route exact path="/user/payments/new/exit">
              <NewExit/>  
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
