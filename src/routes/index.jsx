import { Route, Switch } from "react-router";
// import Home from "../pages/Cadastro";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro"

const Routes = () => {
  return (
    <Switch>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </Switch>
  );
};

export default Routes