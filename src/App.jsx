import ProfileCard from './components/ProfileCard';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Concat from './components/Concat.jsx';
import './App.css';

function App() {
  return (
    <div className="main-bg">
      <div className="portfolio-container">
        <ProfileCard />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Concat />
      </div>
    </div>
  );
}

export default App;
