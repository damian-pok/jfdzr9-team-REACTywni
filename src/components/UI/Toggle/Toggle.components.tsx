import { useState } from "react";
import { ToggleButton } from "./Toggle.styled";

interface ToggleSwitchState {
  isActive: boolean;
}

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState<ToggleSwitchState["isActive"]>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return <ToggleButton onClick={handleClick} isActive={isActive} />;
};

export default ToggleSwitch;
