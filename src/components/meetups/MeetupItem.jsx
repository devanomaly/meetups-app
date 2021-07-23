import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
// exemplo abaixo de como fazer o ultimate destructuring com nested data!!
const MeetupItem = ({ meetup: { image, title, address, description, id } }) => {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        description,
        image,
        address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem