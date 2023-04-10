import styled from "styled-components";

export const SearchEngineWrapper = styled.div`
  width: fit-content;
  height: 390px;
  background: #f3f3f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 39px 30px 39px 30px;
  row-gap: 0.8rem;
  grid-row: 1 / span auto;
`;

export const SearchField = styled.input`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #c2d1d9;
  border-radius: 3px;
  width: 320px;
  height: 40px;
  padding: 0.3rem;
`;

export const SearchLabel = styled.label`
  position: relative;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const CategoryList = styled.div`
  display: grid;
  margin-top: 1.3rem;
  font-size: 1.1rem;
  font-weight: bold;
`;
