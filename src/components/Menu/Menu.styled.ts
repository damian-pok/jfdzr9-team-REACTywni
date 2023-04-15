import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuField = styled.div`
  width: 81rem;
  height: fit-content;
  color: var(--primary-dark-navy);
  border-radius: 1rem;
  background-color: var(--secondary-light-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;

export const LogosAndPrimaryButtonsField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid var(--secoundary-grey);
  padding-bottom: 1rem;
`;

export const SecoundMenuField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  gap: 2rem;
`;

export const LinkMenu = styled(Link)`
  color: var(--primary-dark-navy);
  text-decoration: none;
  :hover {
    color: var(--primary-green);
  }
`;

export const MainLinkMenu = styled(Link)`
  color: var(--primary-dark-navy);
  text-decoration: none;
  font-weight: bold;
  :hover {
    color: var(--primary-green);
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
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
`;
