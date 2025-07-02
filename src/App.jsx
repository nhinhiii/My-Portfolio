import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { PageNotFound } from "./page/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
