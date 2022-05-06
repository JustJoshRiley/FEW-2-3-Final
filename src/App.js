import './App.css';
import Home from './components/Home';
import DisplayResult from './components/Result';
import Saved from './components/Saved';
import StarWars from './components/StarWars';

function App() {
  return (
    <div className="App">
      <div className='Intro'>
        <div className='Intro-Container'>
          <Home/>
          <StarWars/>
        </div>
      </div>
      <div className='Results'>
        <div>
          <DisplayResult/>
        </div>
        <div className='SavedResults'>
          <Saved/>
        </div>
      </div>
      
    </div>
  );
}

export default App;