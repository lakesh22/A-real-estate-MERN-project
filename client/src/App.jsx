import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import About from './pages/about';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
