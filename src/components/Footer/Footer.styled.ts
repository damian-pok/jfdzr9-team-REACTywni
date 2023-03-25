import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterField = styled.div`
  /* width: 100%; */
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  padding: 20px 30px;
  background-color: var(--color-white);
  border-top: 1px solid var(--light-grey-color);
`;

export const FooterNavField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
`;

export const LinkFooter = styled(Link)`
  color: var(--dark-grey-color);
  text-decoration: none;
  :hover {
    color: var(--light-grey-color);
  }
`;
