import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Navbar,
  Hero,
  Tech,
  Works,
  Experience,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </Router>
    </div>
  );
};

export default App;
