import './App.css';
import Navbar from './components/navbar';
import Start from './pages/Start';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Navbar />
      <Start />
    </div>
  );
}

export default App;
