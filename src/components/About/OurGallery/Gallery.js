import Photo from "./PhotoHolder";
import { gallery } from "../../../store/constant-images";

import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <ul className={classes["gallery-ul"]}>
      {gallery.map((photo, idx) => {
        console.log(photo._id);
        return (
          <Photo
            key={`gallery-${photo._id}`}
            photo={photo.imageLink}
            text={photo.imageText}
            idx={idx}
            liClass={classes["gallery-li"]}
          />
        );
      })}
      <li className={classes["gallery-li"]}></li>
    </ul>
  );
};

export default Gallery;
