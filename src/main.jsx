import ReactDOM from "react-dom/client";
import Home from "./index";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
