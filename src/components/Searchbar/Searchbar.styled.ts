import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const SearchField = styled.input`
  background-color: var(--very-light-grey-color);
  border: none;
  border-radius: 5px;
  min-width: 40rem;
  padding: 1rem;
  height: 40px;
`;

export const SearchLabel = styled.label`
  position: relative;
  font-size: 1.5rem;
`;

export const SearchButton = styled.button`
  position: relative;
  border-radius: 5px;
  height: 60px;
  width: 60px;
  font-size: 40px;
  padding: 0.5rem;
  background-color: var(--lime-yellow);

  :hover {
    background-color: var(--black);
    color: var(--white-color);
  }
`;
