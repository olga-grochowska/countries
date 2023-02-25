import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ListCountries } from "./Pages/ListCountries/ListCountries";
import { Details } from "./Pages/Details/Details";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ListCountries />} />
          <Route path="/:country" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
