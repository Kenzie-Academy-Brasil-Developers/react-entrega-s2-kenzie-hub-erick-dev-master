import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/user/home">
          <Home />
        </Route>
      </Switch>
    </Switch>
  );
};

export default Routes