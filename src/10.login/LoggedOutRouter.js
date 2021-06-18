import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { Main } from "./Main";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
