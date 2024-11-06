import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approutes from "./routes/approutes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
