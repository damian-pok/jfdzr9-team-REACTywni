import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const MenuField = styled.div`
  //width: var(--Default-Body-width);
  box-sizing: border-box;
  width: 80vw;
  max-width: 1440px;
  height: fit-content;
  border-radius: 1rem;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2.5rem;
  align-items: center;
`;

export const LogosAndPrimaryButtonsField = styled.div`
  box-sizing: border-box;
  width: 80vw;
  max-width: 1440px;
  display: flex;
  //flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid var(--secoundary-grey);
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const SecoundMenuField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  padding-top: 1rem;
  gap: 2rem;
`;

export const LinkMenu = styled(Link)`
  color: var(--linktextcolor);
  text-decoration: none;
  :hover {
    color: var(--linktextcolorhouver);
  }
`;

export const MainLinkMenu = styled(Link)`
  color: var(--linktextcolor);
  text-decoration: none;
  font-weight: bold;
  :hover {
    color: var(--linktextcolorhouver);
  }
`;

export const Logo = styled.img`
  height: 2.5rem;
  :hover {
    opacity: 0.5;
  }
`;

export const ButtonMenuField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;
`;
