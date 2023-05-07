import styled from "styled-components";

interface ClientFormWrapperProps {
  open: boolean;
}

export const ClientFormWrapper = styled.div<ClientFormWrapperProps>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 380%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #07133b;
  border-radius: 15px;

  width: fit-content;
  height: fit-content;
  padding: 1.5rem 3rem;
  background-color: #fff;

  display: flex;
  background-color: #f3f3f6;
`;
