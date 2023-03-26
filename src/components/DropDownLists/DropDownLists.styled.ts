import styled from "styled-components";

export const DetailsList = styled.div`
  position: relative;
  border: 1px solid var(--light-grey-color);
  border-radius: 5px;
  top: 120px;
`;

export const ListElement = styled.option`
  padding: 10px;
  cursor: pointer;
  color: var(--dark-grey-color);
  :hover {
    background-color: var(--light-blue-grey-color);
    color: white;
  }
`;
