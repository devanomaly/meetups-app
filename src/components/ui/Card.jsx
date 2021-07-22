import classes from './Card.module.css'
// Criando um wrapper para formato "card"
// Para que o wrapper funcione, basta lembrar do props.children!
const Card = ({ children }) => {
  return (
    <div className={classes.card}>
      {children}
    </div>
  )
}

export default Card