import { Provider } from "react-redux";
import store from "./app/lib/store";
import AppBar from "./app/theme-layouts/AppBar";
import RouteConfig from "./configs/routeConfig";
import AuthProvider from "./app/auth/AuthProvider";
import setupInterceptors from "./app/auth/axiosInterceptor";

setupInterceptors();

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppBar>
          <RouteConfig />
        </AppBar>
      </AuthProvider>
    </Provider>
  );
};

export default App;
