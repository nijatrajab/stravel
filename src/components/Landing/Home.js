import { Fragment } from "react";

import Head from "./Header/Head";
import Blogs from "./BlogPost/Blogs";
import Special from "./Special/Special";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Map from "./Map/Map";

import ContentSection from "../UI/ContentSection";
import Content from "../UI/Content";

import classes from "./Home.module.css";

const Home = () => {
  console.log("Rendering");

  return (
    <Fragment>
      <div className={classes.header}>
        <Head />
      </div>
      <Content>
        <ContentSection>
          <Special />
        </ContentSection>
        <ContentSection>
          <Services />
        </ContentSection>
        <ContentSection>
          <Testimonials />
        </ContentSection>
        <ContentSection>
          <Blogs />
        </ContentSection>
        <Map />
      </Content>
    </Fragment>
  );
};

export default Home;
