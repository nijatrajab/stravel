import { useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import Content from "../UI/Content";
import StyledBtn from "../Utils/StyledBtn";
import { CgDetailsMore } from "react-icons/cg";
import classes from "./Header.module.css";
import NavItem from "./NavItem";
import ThemeChanger from "../Utils/ThemeChanger";
import { LayoutGroup } from "framer-motion";

const Header = ({ children, onOpen, navDetail }) => {
  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 3) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackground();
  //   window.addEventListener("scroll", changeBackground);
  //   return window.removeEventListener("scroll", null)
  // });

  const mobileDevice = useMediaQuery("(max-width: 768px)");

  return (
    <header className={`${classes.header}`}>
      <Content contentClass={` ${classes["header-scroll"]}`}>
        <Link to="/" style={{ margin: 0 }}>
          <div className={`${classes.logo} ${classes["logo-scroll"]}`}>
            STravel
          </div>
        </Link>
        <ThemeChanger />
        <nav style={{ margin: 0 }}>
          {mobileDevice ? (
            <StyledBtn className={classes["nav-btn"]} onEvent={onOpen}>
              <CgDetailsMore />
            </StyledBtn>
          ) : (
            <ul>
              <LayoutGroup id="navigation">
                {navDetail.map((nav, idx) => {
                  return (
                    <NavItem
                      key={`nav-${nav.navigate}`}
                      label={nav.label}
                      navigate={nav.navigate}
                      idx={idx}
                    />
                  );
                })}
              </LayoutGroup>
            </ul>
          )}
        </nav>
      </Content>
    </header>
  );
};

export default Header;
