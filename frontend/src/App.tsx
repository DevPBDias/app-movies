import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Favorites from './pages/favorite/Favorite';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/favorites" element={ <Favorites /> } />
    </Routes>
  )
}

export default App;