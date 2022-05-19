import Content from "../../UI/Content";
import ContentSection from "../../UI/ContentSection";
import Head from "./Header/Head";
import Team from "./OurTeam/Team";
import AboutUs from "./WhoWeAre/AboutUs";
import { aboutUs } from "../../store/constant-images";
import Gallery from "./OurGallery/Gallery";

const About = () => {
  return (
    <>
      {/* <Head /> */}
      <div style={{ position: "relative", height: "10px", overflow: "hidden" }}></div>
      <Content>
        <ContentSection>
          <AboutUs aboutUs={aboutUs[0]} />
        </ContentSection>
        <ContentSection>
          <Team ourTeam={aboutUs[1]}/>
        </ContentSection>
        <ContentSection>
          <Gallery />
        </ContentSection>
      </Content>
    </>
  );
};

export default About;
