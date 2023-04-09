import styled from "styled-components";

export const DetailsList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--light-grey-color);
  border-radius: 5px;
  top: 10px;
  width: 100%;
  padding: 0;
`;

export const ListElement = styled.option`
  padding: 10px;
  cursor: pointer;
  color: var(--dark-grey-color);
  width: 100%;
  box-sizing: border-box;
  :hover {
    background-color: var(--light-blue-grey-color);
    color: white;
  }
`;
