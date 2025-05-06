import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Header from './components/header/Header';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="detail" element={<div>상세페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
