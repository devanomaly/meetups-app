import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  //useEffect => resolve o problema de fetching data!
  useEffect( _ => {
    setIsLoading(true)
    fetch(process.env.FIREBASE_URL)
    .then(response => response.json())
    .then(data => {
      let meetups = []

      for (let key in data) {
        meetups.push({
          id: key,
          ...data[key]
        })
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, []) //TODO: veja mais em https://reactjs.org/docs/hooks-reference.html#useeffect

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  return (<div>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
  </div>)
}

export default AllMeetupsPage