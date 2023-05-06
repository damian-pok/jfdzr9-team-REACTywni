import styled from "styled-components";

export const CounterWidgetArea = styled.div`
  //height: fit-content;
  width: 80vw;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding-top: 2rem;

  @media (max-width: 900px) {
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(2, 265px);
    gap: 2rem;
    justify-content: center;
  }
`;

export const SingleCounterWidgetField = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  gap: 1.5rem;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NumberStyles = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 2.5rem;
`;

export const ParagraphStyle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ImageIcon = styled.img`
  height: 5rem;
  width: auto;
`;
