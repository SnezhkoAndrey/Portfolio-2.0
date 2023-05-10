import { useContext } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguagesSelector.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import USA from "../../assets/Flag_of_the_United_States 1.svg";
import UA from "../../assets/Ukraine.svg";

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
  const backgroundColor = theme ? "#e7e8e8" : "#3d444a";
  const borderColor = theme ? "#6d7377" : "rgba(255, 255, 255, 0.4)";
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
                backgroundColor,
              },
            },
          }}
          sx={{
            width: "120px",
            color: { color },
            fontSize: "14px",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor,
            },
            ".MuiSvgIcon-root ": {
              fill: `${icon} !important`,
            },
          }}
        >
          <MenuItem
            value={"en"}
            sx={{
              color,
            }}
          >
            <img className={styles.logo} src={USA} alt="usa" />
            ENG
          </MenuItem>
          <MenuItem
            value={"uk"}
            sx={{
              color,
            }}
          >
            <img className={styles.logo} src={UA} alt="uk" />
            UA
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguagesSelector;
