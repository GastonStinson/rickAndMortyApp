 import style from './SearchBar.module.css';
 import { useState } from 'react';
 
 const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('')

   const handleChange = (e) => {
      setId(id + e.target.value)
   }

   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} className={style.searchBarInput}/> 
         <button className={style.searchBarButton} onClick={onSearch}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
