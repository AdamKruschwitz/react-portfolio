import './styles/App.css';
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <div className="App">
      {/* Link the bootstrap styling. */}
      
      <Navigation />
      <AboutMe />
    </div>
  );
}

export default App;
