import { useContext, useState } from "react";
import { ToggleButton } from "./Toggle.styled";
import { NightModeContext } from "../../../context/darkTheme.context";
import { lightTheme, darkTheme } from "../../../theme/theme";

interface ToggleSwitchState {
  isActive: boolean;
}

const ToggleSwitch = () => {
  const { toggleTheme, theme } = useContext(NightModeContext);
  // const [isActive, setIsActive] = useState<ToggleSwitchState["isActive"]>(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return <ToggleButton onClick={toggleTheme} isActive={theme === lightTheme} />;
};

export default ToggleSwitch;
