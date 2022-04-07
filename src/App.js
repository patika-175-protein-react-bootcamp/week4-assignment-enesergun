import './App.css';
import { GameProvider } from './context/game';
import Router from './router/router';

function App() {
  return (
    <GameProvider>
        <Router />      
    </GameProvider>
  );
}

export default App;