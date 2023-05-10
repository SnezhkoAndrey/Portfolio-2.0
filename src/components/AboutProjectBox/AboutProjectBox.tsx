import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./AboutProjectBox.module.scss";
import useTheme from "../../hooks/useTheme";

interface PropsType {
  children: React.ReactNode;
  title: string;
}

const AboutProjectBox = ({ children, title }: PropsType) => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.projects)}>
      <h3 className={addTheme(styles.title)}>{title}</h3>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default AboutProjectBox;
