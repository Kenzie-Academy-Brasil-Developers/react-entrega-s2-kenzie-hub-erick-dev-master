// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Switch, Route } from "react-router";
// import { useState } from "react";
// import { useHistory } from "react-router";
import Routes from "./routes";
import GlobalStyles from "./styles/global"
function App() {
  // const [user, setUser] = useState({});
  // const history = useHistory();
  
  return (
    <>
      <GlobalStyles/>
      <Routes/>
    </>
  );
}

export default App;
