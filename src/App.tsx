import { Provider } from "react-redux";
import store from "./app/lib/store.ts";
import AppBar from "./app/theme-layouts/AppBar.tsx";
import RouteConfig from "./configs/routeConfig.tsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppBar>
          <RouteConfig />
        </AppBar>
      </Provider>
    </>
  );
};

export default App;
