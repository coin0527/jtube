import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shorts" element={<Home />}></Route>
          <Route path="/subscribe" element={<Home />}></Route>
          <Route path="/popular" element={<Home />}></Route>
          <Route path="/shopping" element={<Home />}></Route>
          <Route path="/music" element={<Home />}></Route>
          <Route path="/movie" element={<Home />}></Route>
          <Route path="/live" element={<Home />}></Route>
          <Route path="/game" element={<Home />}></Route>
          <Route path="/sports" element={<Home />}></Route>
          <Route path="/study" element={<Home />}></Route>
          <Route path="/potcast" element={<Home />}></Route>
          <Route path="/user" element={<Home />}></Route>
          <Route path="/bell" element={<Home />}></Route>
          <Route path="/setting" element={<Home />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};
