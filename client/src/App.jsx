import './App.css';
import Landing from './components/Landing';
import Members from './components/Members';
import Achievements from './components/Achievements';
import { Route, Routes } from 'react-router-dom';
import Classes from "./components/Classes";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path='/achievements' element={<Achievements />} ></Route>
        <Route path="/members" element={<Members/>}></Route>
      </Routes>
    </>
  )
}

export default App
