import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {

   const [ id, setId ] = useState('');

   function handleChange(event) {
      setId(event.target.value)
   }

   return (
      <div className={style.contenedor}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=> {onSearch(id)}}>Agregar</button>
      </div> 
   );
}

export default SearchBar;
