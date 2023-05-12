import style from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card({name, status, species, gender, image, onClose, id}) {
   return (
      <div className={style.contenedor}>
         <img src={image} alt='' />

         <Link to={`/detail/${id}`}>
            <h2 className={style.nombre}>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <button onClick={() => {onClose(id)}}>CERRAR</button>
      </div>
   );
}
