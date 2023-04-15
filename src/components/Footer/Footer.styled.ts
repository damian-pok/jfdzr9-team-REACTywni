import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterField = styled.div`
  width: 81rem;
  height: fit-content;
  display: flex;
  flex-direction: row;
  color: var(--secondary-very-light-grey);
  background-color: var(--primary-dark-navy);
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 1.5rem 2.5rem;
`;

export const FooterNavField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
`;

export const LinkFooter = styled(Link)`
  color: var(--white-color);
  text-decoration: none;
  :hover {
    color: var(--primary-green);
  }
`;

export const LogoFooter = styled.img`
  height: 2.5rem;
  :hover {
    opacity: 0.5;
  }
`;

export const LogoField = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  color: var(--secondary-very-light-grey);
`;
