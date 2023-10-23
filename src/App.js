import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MagicBall8 from './pages/MagicBall8';
import FootBallClubs from './pages/FootBallClubs';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MagicBall8/>}/>
        <Route exact path='/football' element={<FootBallClubs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
