import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
const EMAIL = 'henry123@gmail.com'
const PASSWORD = 'henry123'

function App() {

   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation()

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }


   const navigate = useNavigate();
   const [access, setAccess] = useState(false);


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         {<Nav onSearch={onSearch} /> && pathname !== '/'}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
