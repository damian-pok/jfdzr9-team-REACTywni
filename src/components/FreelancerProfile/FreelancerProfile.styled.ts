import styled from "styled-components";

export const FreelancerWrapper = styled.div`
  transform: scale(0.75);
`;

export const EditionButton = styled.button`
  height: fit-content;
  width: fit-content;
  background-color: #07133b;
  color: white;
  border-radius: 5px;
  padding: 0.6rem 1.6rem;
  cursor: pointer;

  :hover {
    background-color: var(--additional-navy);
  }
`;

export const CloseButton = styled.button`
  border: 1px solid;
  border-radius: 5px;
  background-color: var(--primary-green);
  height: fit-content;
  padding: 0.3rem;
  display: flex;
  font-size: 18px;
  transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    border-color: var(--secondary-very-light-grey);
    transform: scale(1.15);
  }
`;
