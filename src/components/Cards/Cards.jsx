import Card from '../Card/Card';
import style from './Cards.module.css'

function Cards({characters, onClose}) {
      return (
         <div className={style.contenedor}>
            {characters.map(({name, status, species, gender, image, origin, id}) => {
                  return (
                     <Card 
                        id = {id}
                        key = {id}
                        name = {name}
                        status = {status}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                        species = {species}
                        gender = {gender}
                        origin = {origin.name} 
                        image = {image}
                        onClose = {onClose}
                     />
                  )
               })}
         </div>
      )
}

export default Cards
