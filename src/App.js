import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './page/Home';
import Detail from './page/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/event/:id" element={<Detail type="event" />} />
        <Route path="/detail/package/:id" element={<Detail type="package" />} />
        <Route path="/detail/room/:id" element={<Detail type="room" />} />
      </Routes>
    </div>
  );
}

export default App;
