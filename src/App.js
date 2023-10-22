import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MagicBall8 from './pages/MagicBall8';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MagicBall8/>}/>
      </Routes>
    </Router>
  );
}

export default App;
