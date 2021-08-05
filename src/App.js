import { Provider } from "react-redux";
import store from "./store/index";
import PlaceScreen from "./components/PlaceScreen";

export default function App() {
  return (
    <Provider store={store}>
      <PlaceScreen />
    </Provider>
  );
}
