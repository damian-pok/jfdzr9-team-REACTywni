import { useContext } from "react";
import { ToggleButton } from "./Toggle.styled";
import { NightModeContext } from "../../../context/darkTheme.context";
import { lightTheme } from "../../../theme/theme";

const ToggleSwitch = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);

  return <ToggleButton onClick={toggleTheme} isActive={theme === lightTheme} />;
};

export default ToggleSwitch;
