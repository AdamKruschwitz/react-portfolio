import './styles/App.css';
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      {/* Link the bootstrap styling. */}
      
      <Navigation />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
