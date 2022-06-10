
import { Route, Routes } from 'react-router-dom';
import AboutMe from './about/AboutMe';
import Contact from './contact/Contact';
import Home from './Home/Home';



function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
