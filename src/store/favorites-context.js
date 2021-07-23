import { createContext, useState } from "react";
// TODO: rever aulas 44 e 45 do Max para entender melhor essa coisa toda de contexto e os truques para lidar com a latência dos set-states... 
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => { }, //adicionando aqui apenas para autocomplete
  removeFavorite: (meetupId) => { }, //adicionando aqui apenas para autocomplete
  itemIsFavorite: (meetupId) => { }, //adicionando aqui apenas para autocomplete
})

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetup)
    })
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>)
}
export default FavoritesContext
export { FavoritesContextProvider }