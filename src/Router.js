import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shorts } from "./pages/Shorts";
import { Subscribe } from "./pages/Subscribe";
import { Popular } from "./pages/Popular";
import { Shopping } from "./pages/Shopping";
import { Music } from "./pages/Music";
import { Movie } from "./pages/Movie";
import { Live } from "./pages/Live";
import { Game } from "./pages/Game";
import { Sports } from "./pages/Sports";
import { Study } from "./pages/Study";
import { Pot } from "./pages/Pot";
import { User } from "./mypages/User";
import { Bell } from "./mypages/Bell";
import { Setting } from "./mypages/Setting";

export const Router = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          {/* pages */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/shorts" element={<Shorts />}></Route>
          <Route path="/subscribe" element={<Subscribe />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/live" element={<Live />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/study" element={<Study />}></Route>
          <Route path="/potcast" element={<Pot />}></Route>
          {/* mypages */}
          <Route path="/user" element={<User />}></Route>
          <Route path="/bell" element={<Bell />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};
