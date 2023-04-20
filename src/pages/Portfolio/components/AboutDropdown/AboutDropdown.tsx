import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./AboutDropdown.module.scss";
import marker_light from "../../../../assets/marker-light.png";
import marker_dark from "../../../../assets/marker-dark.png";

interface PropsType {
  number: string;
  name: string;
  content: string[];
}

const AboutDropdown = ({ number, name, content }: PropsType) => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [open, setOpen] = useState(false);

  return (
    <div className={addTheme(styles.details)}>
      <div
        className={addTheme(
          open ? `${styles.summary} ${styles.active}` : styles.summary
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.contentItem}>
          <p className={addTheme(styles.number)}>{number}</p>
          <h3 className={addTheme(styles.name)}>{name}</h3>
        </div>
        <img
          className={open ? `${styles.marker} ${styles.active}` : styles.marker}
          src={theme ? marker_light : marker_dark}
          alt="marker"
        />
      </div>
      <div
        className={addTheme(
          open ? `${styles.content} ${styles.active}` : styles.content
        )}
      >
        {content.map((tech) => (
          <div key={tech} className={addTheme(styles.contentItem)}>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutDropdown;
