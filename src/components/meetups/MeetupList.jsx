import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

const MeetupList = (props) => {
  return (
    // JEITO 1: (MeetupItem espera "props")
    // <ul className={classes.list}>
    //   {props.meetups.map(meetup => <MeetupItem 
    //   key={meetup.id} 
    //   id={meetup.id}
    //   image={meetup.image}
    //   title={meetup.title}
    //   address={meetup.address}
    //   description={meetup.description}
    //   />)}
    // </ul>

    // JEITO 2: (MeetupItem faz o destructuring)
    <ul className={classes.list}>
      {props.meetups.map(meetup => <MeetupItem
        meetup={meetup}
        key={meetup.id}
      />)}
    </ul>
  )
}
export default MeetupList