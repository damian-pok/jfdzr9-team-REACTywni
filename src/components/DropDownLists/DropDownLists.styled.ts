import styled from "styled-components";

export const DetailsList = styled.section`
  /* display: none; */
  position: relative;
  border: 1px solid var(--light-grey-color);
  border-radius: 5px;
`;

export const ListElement = styled.option`
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: var(--light-blue-grey-color);
  }
`;
