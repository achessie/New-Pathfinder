import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/HomePage/homepage';
import UserAuth from './pages/UserAuth/UserAuth';
import InputForm from './pages/InputForm/InputForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/get-started" element={<UserAuth />} />
        <Route path="/input" element={<InputForm />} />
      </Routes>
      </>
  );
}

export default App;
