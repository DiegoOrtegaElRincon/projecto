import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Vods from './pages/vods/Vods';
import Reviews from './pages/reviews/Reviews';
import Contact from "./pages/contact/Contact";
import Forum from './pages/forum/Forum';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/vods' element={<Vods />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Forum' element={<Forum/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
