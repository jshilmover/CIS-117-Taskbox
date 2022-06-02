import { Provider } from "react-redux";
import store from "./lib/redux";

import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
