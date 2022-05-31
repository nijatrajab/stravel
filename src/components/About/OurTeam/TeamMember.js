import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { motion } from "framer-motion";
import classes from "./TeamMember.module.css";
import useHttpImage from "../../../hooks/use-http";
import { useEffect, useState } from "react";

const teamCardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        ease: "easeOut",
      },
    };
  },
};

const urlConf =
  "https://images.unsplash.com/photo-1525466679351-f36f43c1d460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const TeamMember = ({
  children,
  index,
  name,
  desc,
  position,
  image,
  social,
}) => {
  const [teamImage, setTeamImage] = useState(null);
  const { isLoading, hasError, sendRequest } = useHttpImage();

  useEffect(() => {
    const getImage = (imgObj) => {
        setTeamImage(imgObj);
      }
    sendRequest({ url: urlConf}, getImage)
  }, [sendRequest])

  return (
    <motion.div
      variants={teamCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
      className={classes["team-card"]}
    >
      <div className={classes["team-card-image"]}>
          {isLoading && <p>isloading</p>}
          {hasError && <p>{hasError}</p>}
        {(!isLoading && !hasError) && <img src={image} alt={name} />}
      </div>
      <div className={classes["team-card-pos"]}>
        <p className={classes["position"]}>{position}</p>
      </div>
      <div className={classes["team-card-detail"]}>
        <p className={classes["team-card-name"]}>{name}</p>
        <p className={classes["team-card-desc"]}>{desc}</p>
        <div className={classes["team-card-social"]}>
          {social.facebook.trim() !== "" && (
            <a href={social.facebook}>
              <RiFacebookLine className={classes["social-icons"]} />
            </a>
          )}
          {social.instagram.trim() !== "" && (
            <a href={social.instagram}>
              <RiInstagramLine className={classes["social-icons"]} />
            </a>
          )}
          {social.twitter.trim() !== "" && (
            <a href={social.twitter}>
              <RiTwitterLine className={classes["social-icons"]} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
