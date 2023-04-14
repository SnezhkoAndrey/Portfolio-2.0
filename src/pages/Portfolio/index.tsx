import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import useTheme from "../../hooks/useTheme";
import styles from "./Portfolio.module.scss";
import Title from "./components/Title";
import Generally from "./components/Generally";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

const Portfolio = () => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.main)}>
      <Title />
      <div className={styles.info}>
        <Generally />
        <Contacts />
      </div>
      <Projects />
      <About />
    </div>
  );
};

export default Portfolio;
