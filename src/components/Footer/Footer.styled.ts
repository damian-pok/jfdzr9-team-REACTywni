import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterField = styled.div`
  //max-width: var(--Default-Body-width);
  box-sizing: border-box;
  width: 80vw;
  max-width: 1440px;
  height: 70px;
  display: flex;
  flex-direction: row;
  color: var(--secondary-very-light-grey);
  background-color: var(--footerbackgroundcolor);
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  position: absolute;
  bottom: 0;

  @media (max-width: 900px) {
    display: grid;
    min-width: 600px;
    height: 100px;
    justify-content: center;
  }
`;

export const FooterNavField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 20px;
  gap: 3rem;
`;

export const LinkFooter = styled(Link)`
  color: var(--footerlinktextcolor);
  text-decoration: none;
  :hover {
    color: var(--footerlinktextcolorhouver);
  }
`;

export const LogoFooter = styled.img`
  height: 2.5rem;
  :hover {
    opacity: 0.5;
  }
  padding-left: 10px;
`;

export const LogoField = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  color: var(--secondary-very-light-grey);
`;
