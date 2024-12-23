import { BrowserRouter } from "react-router-dom";
import "./style/App.scss";
import PageRouter from "./components/PageRouter";
import ScrollToAnchor from "./components/ScrollToElement";
import { CartLoading } from "./components/cartLoading";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartLoading />
      <ScrollToAnchor />
      <PageRouter />
    </BrowserRouter>
  );
};

export default App;
