import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Favorites from './pages/favorite/Favorite';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  )
}

export default App;