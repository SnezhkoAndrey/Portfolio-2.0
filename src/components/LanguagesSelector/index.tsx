import { useContext } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguagesSelector.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import usa from "../../assets/Flag_of_the_United_States.png";
import uk from "../../assets/Ukraine.png";

const LanguagesSelector = () => {
  const { i18n } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const [language, setLanguage] = useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const color = theme ? "#0C151D" : "#fff";
  const background = theme ? "#e7e8e8" : "#3d444a";
  const border = theme ? "#6d7377" : "rgba(255, 255, 255, 0.4)";
  const icon = theme ? "#6d7377" : "#9EA1A5";

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={language}
          onChange={handleChange}
          style={{ borderRadius: "100px" }}
          SelectDisplayProps={{ style: { paddingTop: 8, paddingBottom: 8 } }}
          MenuProps={{
            sx: {
              ".MuiMenu-paper": {
                backgroundColor: background,
              },
            },
          }}
          sx={{
            width: "120px",
            color: { color },
            fontSize: "14px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: border,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: border,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: border,
            },
            ".MuiSvgIcon-root ": {
              fill: `${icon} !important`,
            },
          }}
        >
          <MenuItem
            value={"en"}
            sx={{
              color: color,
            }}
          >
            <img className={styles.logo} src={usa} alt="usa" />
            ENG
          </MenuItem>
          <MenuItem
            value={"uk"}
            sx={{
              color: color,
            }}
          >
            <img className={styles.logo} src={uk} alt="uk" />
            UA
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguagesSelector;
