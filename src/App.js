
import { Route, Routes } from 'react-router-dom';
import AboutMe from './about/AboutMe';
import Contact from './contact/Contact';
import Home from './Home/Home';
import Type from './typist/Type';


function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/aboutme' element={<AboutMe />}></Route>
      </Routes>

      <Type />

    </div>
  );
}

export default App;
