import styled from "styled-components";

export const ProfileInput = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
`;

export const ChoiceRadio = styled.div`
  display: flex;
  direction: row;
  gap: 10px;
`;

export const ChoiceRadioGroup = styled.div`
  display: flex;
  direction: row;
  gap: 50px;
`;

export const ProfileInputWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding-bottom: 50px;
  background-color: var(--very-light-grey-color);
  border: solid 1px black;
  border-radius: 15px;
`;

export const ProfileInputWrapperSecondary = styled.div`
  display: flex;
  justify-content: center;
`;
