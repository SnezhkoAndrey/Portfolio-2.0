import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./Title.module.scss";
import avatar from "../../../../assets/avatar.png";
import download from "../../../../assets/download.png";

const Title = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.title)}>
      <div className={styles.desc}>
        <div className={addTheme(styles.avatarWrapper)}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
        </div>
        <div className={styles.name}>
          <h2 className={addTheme(styles.nameItem)}>{t("home_name")}</h2>
          <p className={addTheme(styles.profession)}>{t("home_profession")}</p>
        </div>
      </div>
      <a href="https://www.dropbox.com/s/q3jh43wdjd6qqap/resume.pdf?dl=0">
        <button className={styles.button}>
          <div className={styles.downloadButton}>
            <p>{t("home_download")}</p>
            <img src={download} alt="download" />
          </div>
        </button>
      </a>
    </div>
  );
};

export default Title;
