import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Start from './pages/Start';
import Scene1 from './pages/Scene1';
import Scene2 from './pages/Scene2';
import Scene3 from './pages/Scene3';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/scene1" element={<Scene1 />} />
        <Route path="/scene2" element={<Scene2 />} />
        <Route path="/scene3" element={<Scene3 />} />
      </Routes>
    </div>
  );
}

export default App;
