import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

import "./App.css";

function App() {
  return (
    <div className="bg-red-100">
      <Home />
      <MyAccount />
      <MyOrders />
      <NotFound />
      <SignIn />
    </div>
  );
}

export default App;
