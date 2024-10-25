import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approutes from "./routes/approutes";

const App = () => {
  return (
    <BrowserRouter>
      <Approutes />
    </BrowserRouter>
  );
};

export default App;
