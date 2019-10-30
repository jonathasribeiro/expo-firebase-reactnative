import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "./pages/Home";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Main,
    Dashboard
  })
);

export default Routes;
