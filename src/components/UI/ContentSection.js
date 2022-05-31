import classes from "./ContentSection.module.css"

const ContentSection = ({children, sectionClass}) => {
    return (
        <div className={`${classes["content-section"]} ${sectionClass ? sectionClass : ""}`}>
            {children}
      </div>
    )
}

export default ContentSection