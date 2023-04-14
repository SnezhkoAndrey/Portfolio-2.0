import { useContext } from "react";
import styles from "./ThemeButton.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import useTheme from "../../hooks/useTheme";
import theme_light from "../../assets/theme-light.png";
import theme_dark from "../../assets/theme-dark.png";

const ThemeButton = () => {
  const { changeTheme, theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <button className={addTheme(styles.themeButton)} onClick={changeTheme}>
      <img
        className={addTheme(styles.themeImg)}
        src={theme ? theme_light : theme_dark}
        alt="theme"
      />
    </button>
  );
};

export default ThemeButton;
