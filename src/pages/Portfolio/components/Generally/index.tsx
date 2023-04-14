import { useTranslation } from "react-i18next";
import styles from "./Generally.module.scss";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";

const Generally = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.generally)}>
      <h3 className={addTheme(styles.generallyTitle)}>{t("home_generally")}</h3>
      <p className={addTheme(styles.generallyContent)}>{t("home_desc")}</p>
    </div>
  );
};

export default Generally;
