import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./Contacts.module.scss";
import email_light from "../../../../assets/email-light.png";
import email_dark from "../../../../assets/email-dark.png";
import phone_light from "../../../../assets/phone-light.png";
import phone_dark from "../../../../assets/phone-dark.png";
import linkedin_dark from "../../../../assets/linkedin-dark.png";
import linkedin_light from "../../../../assets/linkedin-light.png";
import telegram_dark from "../../../../assets/telegram-dark.png";
import telegram_light from "../../../../assets/telegram-light.png";
import git_dark from "../../../../assets/git-dark.png";
import git_light from "../../../../assets/git-light.png";

const Contacts = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [isCopy, setIsCopy] = useState(false);

  if (isCopy) {
    setTimeout(() => setIsCopy(false), 10000);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("andreysnezhok@gmail.com");
    setIsCopy(true);
  };

  return (
    <div className={addTheme(styles.contacts)}>
      <h3 className={addTheme(styles.title)}>{t("home_contact")}</h3>
      <div className={addTheme(styles.email)}>
        <div className={styles.emailItem}>
          <img
            className={styles.logo}
            src={theme ? email_dark : email_light}
            alt="email"
          />
          <p className={addTheme(styles.emailContent)}>
            andreysnezhok@gmail.com
          </p>
        </div>
        <button className={addTheme(styles.copyButton)} onClick={handleCopy}>
          {isCopy ? t("home_copied") : t("home_copy")}
        </button>
      </div>
      <div className={styles.phone}>
        <img
          className={styles.logo}
          src={theme ? phone_dark : phone_light}
          alt="phone"
        />
        <p className={addTheme(styles.phoneContent)}>+38 (097) 603 39 10</p>
      </div>
      <div className={styles.link}>
        <a href="https://www.linkedin.com/in/andrii-snizhko-887785258/">
          <button className={addTheme(styles.linkButton)}>
            <img
              className={styles.linkLogo}
              src={theme ? linkedin_dark : linkedin_light}
              alt="linkedin"
            />
          </button>
        </a>
        <a href="https://t.me/AndriiSnizhko">
          <button className={addTheme(styles.linkButton)}>
            <img
              className={styles.linkLogo}
              src={theme ? telegram_dark : telegram_light}
              alt="telegram"
            />
          </button>
        </a>
        <a href="https://github.com/SnezhkoAndrey">
          <button className={addTheme(styles.linkButton)}>
            <img
              className={styles.linkLogo}
              src={theme ? git_dark : git_light}
              alt="git"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
