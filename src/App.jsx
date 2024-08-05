import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Heading";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header />}></Route> */}
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
