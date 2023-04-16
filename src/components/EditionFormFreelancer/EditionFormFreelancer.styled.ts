import styled from "styled-components";

interface FormWrapperProps {
  open: boolean;
}

export const FormWrapper = styled.div<FormWrapperProps>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  max-width: 300px;
  padding: 20px;
  background-color: #fff;

  height: fit-content;
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  background-color: aliceblue;
`;
