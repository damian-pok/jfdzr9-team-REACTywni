import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterField = styled.div`
  width: 1440px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 1.5rem 2.5rem;
  background-color: var(--black);
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
    color: var(--lime-yellow);
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
  color: var(--white-color);
`;
