import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "../routes";
import { Header } from "./components/Header";
import { Home } from "./page/Home";
import { SubOne } from "./page/SubOne";
import { SubTwo } from "./page/SubTwo";
import { NotFound } from "../08.router/components/NotFound";

export const PhotoView = () => {
  return (
    <Router>
      <Header />
      <Route>
        <Switch>
          <Route path={routes.home} exact>
            <Home />
          </Route>

          <Route path={routes.subOne}>
            <SubOne />
          </Route>

          <Route path={routes.subTwo}>
            <SubTwo />
          </Route>

          <Route>
            <NotFound />
            {/* <Redirect /> */}
          </Route>
        </Switch>
      </Route>
    </Router>
  );
};
