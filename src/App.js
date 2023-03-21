import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/coreStore";
import HolderComponent from "./redux/HolderComponent";

function App() {
  return (
    <Provider store = {store}>
      <HolderComponent/>
    </Provider>
  );
}

export default App;
