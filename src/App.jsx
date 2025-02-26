import './App.css';
import Index from './Intro/Index';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sports from './Sports/Sports';
import Cultural from './Cultural/Cultural';
// import Events from './Cultural/Events';
import Login from './Sports/Login';
import Schedule from "./Sports/Schedule"
import Council from './Council/Council';
import Heads from './Heads/Heads';
import UnifiedContainer from './Sports/box_cricket';
import RenderContent from './Sports/box_cricket';
// import CulturalEvent from './Cultural/Events';
import Gallery from './Cultural/Gallery';
import Ghanekar from './Cultural/Ghanekar';
import EventSection from './Cultural/EventSection';
import Day1Events from './Cultural/Day1Events';
import Day2Events from './Cultural/Day2Events';
import HeroSection from './Cultural/HeroSection';
import About from './Cultural/AboutUs';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/sports" exact element={<Sports />} />
      <Route path="/cultural" exact element={<Cultural />} />
      <Route path="/cultural/gallery" exact element={<Gallery />} />
      <Route path="/cultural/about" exact element={<About />} />
      {/* <Route path="/cultural/events" exact element={<CulturalEvent />} /> */}
      <Route path="/" element={<EventSection />} />
      <Route path="/day/1" element={<Day1Events />} />
      <Route path="/day/2" element={<Day2Events />} />
      <Route path="/ghanekar" exact element={<Ghanekar />} />
      {/* <Route path="/events" exact element={<Events />} /> */}
      <Route path="/login" exact element={<Login />} />
      <Route path="/schedule" exact element={<Schedule />} />
      <Route path="/council" exact element={<Council />} />
      <Route path="/heads" exact element={<Heads />} />
      <Route path="/box-cricket" exact element={<UnifiedContainer />} />
      <Route path="/box-cricket/contact-us" exact element={<RenderContent />}/>
      <Route path="/box-cricket/rules" exact element={<RenderContent />}/>
      <Route path="/box-cricket/details" exact element={<RenderContent />}/>
    </Routes>
    </Router>
  )
}

export default App
