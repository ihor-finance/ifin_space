import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Article from "./pages/Article";

const App: FC = () => {
  return (
    <ScrollToTop>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/articles/:articleId" element={<Article />}/>
          {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
      </main>
    </ScrollToTop>
  );
};

export default App;