import React from 'react'
import classes from "./PhotoDetail.module.css"

const PhotoDetail = ({children, title, author}) => {
  return (
    <div className={classes["photo-detail"]}>
        <p>{title}</p>
        <p>{author}</p>
    </div>
  )
}

export default PhotoDetail