import Stars from "../../Utils/Stars"
import classes from "./Testimonial.module.css"

const Testimonial = ({children, name, desc, star}) => {
    return <>
    <div className={classes["testimonial"]}>
        <Stars starCount={star} starClass={classes["t-star"]} />
        <p className={classes["t-desc"]}>"{desc}"</p>
        <p className={classes["t-name"]}>{name}</p>
    </div>
    </>
}

export default Testimonial