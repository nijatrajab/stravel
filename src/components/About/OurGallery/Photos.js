import React from 'react'
import Photo from './PhotoHolder';
import classes from "./Photos.module.css"

const Photos = ({children, photoList, photoFn}) => {
    console.log("Photos rendering")
  return (
    <ul className={classes["gallery-ul"]}>
        {photoList.map((photo) => {
          return (
            <Photo
              key={`gallery-${photo._id}`}
              photo={photo.imageLink}
              text={photo.imageText}
              idx={photo._id}
              liClass={classes["gallery-li"]}
              onOpen={photoFn}
            />
          );
        })}
        <li className={classes["gallery-li"]}></li>
      </ul>
  )
}

export default React.memo(Photos)