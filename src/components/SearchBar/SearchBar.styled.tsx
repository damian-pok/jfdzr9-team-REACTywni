import styled from "styled-components";

export const SearchInput = styled.input`
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

export const SearchBarForm = styled.form`
  width: 100%;
  position: relative;
`;
