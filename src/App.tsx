import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Approutes from "./routes/approutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Approutes />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
