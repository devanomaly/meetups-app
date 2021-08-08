import { useHistory } from "react-router"

import NewMeetupForm from "../components/meetups/NewMeetupForm"
function NewMeetupPage() {
  const history = useHistory()

  const addMeetupHandler = (meetupdata) => {
    // TODO: implementar um backend simples para brincar com database... deixar ele ouvindo na port 5050
    fetch(process.env.FIREBASE_URL, //O .json no final eh PARAMOUNT para evitar erros CORS
      {
        method: "POST",
        body: JSON.stringify(meetupdata), //convertendo para JSON
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ) //FIXME: poderia usar axios também...
    .then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>)
}

export default NewMeetupPage