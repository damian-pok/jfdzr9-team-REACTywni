import styled from "styled-components";

export const InputForm = styled.input`
  width: 20rem;
  height: 2.5rem;
  background-color: var(--inputbackgroundcolor);
  border: 2px solid var(--inputbordercolor);
  border-radius: 0.2rem;
  padding-left: 1rem;
  color: var(--textcolor);
  ::placeholder {
    color: var(--placeholdertextcolor);
  }
  &:focus {
    outline-color: var(--inputactiveborder);
  }
`;

export const InputLoginSign = styled.input`
  width: 20rem;
  height: 2.5rem;
  background-color: var(--inputbackgroundcolor);
  border: 2px solid var(--inputbordercolor);
  border-radius: 0.2rem;
  padding-left: 1rem;
  ::placeholder {
    color: var(--placeholdertextcolor);
  }
`;

export const InputTextArea = styled.input`
  width: 20rem;
  height: 5rem;
  background-color: var(--inputbackgroundcolor);
  border: 2px solid var(--inputbordercolor);
  border-radius: 0.2rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  resize: none;
  color: var(--textcolor);
  ::placeholder {
    color: var(--placeholdertextcolor);
  }
`;
