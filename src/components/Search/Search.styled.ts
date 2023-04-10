import styled from "styled-components";

export const SearchWrapper = styled.div`
  height: 390px;
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 39px 30px 39px 30px;
  gap: 1.2rem;
  background-color: #f3f3f6;
  border-radius: 15px;
  grid-row: 1 / span 5;
`;

export const SearchField = styled.input`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #c2d1d9;
  border-radius: 3px;
  width: 320px;
  height: 38.3px;
  padding: 1rem;
  height: 40px;
`;

export const SearchLabel = styled.label`
  position: relative;
  font-size: 1.5rem;
`;
