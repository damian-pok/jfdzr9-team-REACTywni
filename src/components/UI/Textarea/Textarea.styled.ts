import styled from "styled-components";

export const TextareaForm = styled.textarea`
  width: 19rem;
  height: 5rem;
  background-color: var(--inputbackgroundcolor);
  border: 2px solid var(--inputbordercolor);
  border-radius: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  resize: none;
  color: var(--textcolor);
  ::placeholder {
    color: var(--placeholdertextcolor);
  }
  &:focus {
    outline-color: var(--inputactiveborder);
  }
`;
