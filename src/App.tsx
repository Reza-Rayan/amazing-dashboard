import { Provider } from "react-redux";
import store from "./app/lib/store.ts";
import RouteConfig from "./configs/routeConfig.tsx";
import AppBar from "./app/theme-layouts/AppBar.tsx";

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
