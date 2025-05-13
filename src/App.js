import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './page/Home';
import Detail from './page/Detail';
import SelectRoom from './page/SelectRoom';
import Cart from './page/Cart';
import QnA from './page/QnA';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/event/:id" element={<Detail type="event" />} />
        <Route path="/package/:id" element={<Detail type="package" />} />
        <Route path="/room/:id" element={<Detail type="room" />} />
        <Route path="/select-room" element={<SelectRoom/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/qna" element={<QnA/>} />
      </Routes>
    </div>
  );
}

export default App;
