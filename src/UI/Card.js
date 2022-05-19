import classes from './Card.module.css'

const Card = (props) => {
    const cardClass = `${classes.card} ${props.cardClass ? props.cardClass : ''}`
    return <div className={cardClass} >{props.children}</div>
}

export default Card