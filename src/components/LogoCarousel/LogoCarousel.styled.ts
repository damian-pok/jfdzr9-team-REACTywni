import styled from "styled-components";

export const LogoField = styled.div`
  max-width: 1332px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  gap: 5rem;
  padding: 4rem 0;
  overflow: hidden;
  position: relative;
`;

export const LogoStyles = styled.img`
  height: 2rem;
  width: auto;
  gap: 1.5rem;
  opacity: 0.3;
  :hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;
