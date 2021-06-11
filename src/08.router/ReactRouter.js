import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NotFound } from "./components/NotFound";
import { Photo } from "./components/Photo";
import { Video } from "./components/Video";
//=>as를 이용하여 이름을 바꿀수있음

export const ReactRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={routes.home} exact>
          <Main />
        </Route>

        <Route path={routes.photo}>
          <Photo />
        </Route>

        <Route path={routes.video}>
          <Video />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
