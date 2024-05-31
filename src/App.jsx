import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import UserProfile from './Pages/UserProfile';
import Market from './Pages/Market';

function App() {
  

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/market' element={<Market />}/>
          <Route path='/userprofile' element={<UserProfile />}/>
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App
