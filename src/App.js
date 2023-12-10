import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
