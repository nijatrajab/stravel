import Card from "../../../UI/Card";
import classes from "./InstaPhoto.module.css";
import { useEffect, useState } from "react";
import useHttpImage from "../../../hooks/use-http";

const InstaPhoto = ({ children, photo, text }) => {
  const [instaImage, setInstaImage] = useState(null);
  const { isLoading, hasError, sendRequest } = useHttpImage();

  useEffect(() => {
    const getImage = (imgObj) => {
      setInstaImage(imgObj);
    };
    sendRequest({ url: photo }, getImage);
  }, [sendRequest, photo]);

  return (
    <div className={classes["instagram-card-img"]}>
      <img src={instaImage} alt={text}></img>
    </div>
  );
};

export default InstaPhoto;
