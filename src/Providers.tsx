import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./redux/store";

const Providers = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider >
  );
};

export default Providers;
