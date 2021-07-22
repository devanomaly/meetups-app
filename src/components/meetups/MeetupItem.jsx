import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
// exemplo abaixo de como fazer o ultimate destructuring com nested data!!
const MeetupItem = ({ meetup: { image, title, address, description } }) => {
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
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem