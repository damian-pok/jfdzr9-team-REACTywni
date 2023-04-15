import styled from "styled-components";

interface ToggleButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  position: relative;
  width: 2.5rem;
  height: 1.4rem;
  border-radius: 2.5rem;
  background-color: ${(props) => (props.isActive ? "#1AD079" : "#07133B")};
  color: ${(props) => (props.isActive ? "#07133B" : "#F8F9FB")};
  padding: 0.4rem 1rem;
  border: none;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.isActive ? "1.2rem" : "0.3rem")};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => (props.isActive ? "#07133B" : "#F8F9FB")};
    transition: all 0.3s ease-in-out;
  }
`;

//moje
export const ToggleField = styled.div`
  background-color: var(--primary-dark-navy);

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ToggleSlider = styled.div`
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: var(--secondary-very-light-grey);
  border-radius: 50px;
  cursor: pointer;
  :before {
    position: absolute;
    content: "";
    right: 2px;
    bottom: 2px;
    top: 2px;
    background-color: white;
    border-radius: 15px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
`;
