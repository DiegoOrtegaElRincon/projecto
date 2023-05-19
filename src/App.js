import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Vods from './pages/vods/Vods';
import Reviews from './pages/reviews/Reviews';
import Contact from "./pages/contact/Contact";
import Forum from './pages/forum/Forum';
import New1 from './pages/News/New1';
import New2 from './pages/News/New2';
import New3 from './pages/News/New3';
import AllNews from './pages/News/AllNews';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/vods' element={<Vods />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/new1' element={<New1 />} />
          <Route path='/new2' element={<New2/>} />
          <Route path='/new3' element={<New3 />} />
          <Route path='/news' element={<AllNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
