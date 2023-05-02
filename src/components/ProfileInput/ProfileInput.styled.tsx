import styled from "styled-components";

export const ProfileSelectionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--Default-Distanse-beetween-sections) 0;
`;

export const HeaderStyles = styled.h2`
  font-size: var(--Default-Headline-2-size);
  padding-bottom: 1.5rem;
`;

export const HeadlineTitle = styled.h4`
  font-size: var(--Default-Body-size);
`;

export const ParagraphStyle = styled.p`
  font-size: var(--Default-Body-size);
  margin-bottom: 1rem;
`;

export const ProfileInputWrapper = styled.div`
  width: 47.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--cardgroundcolor);
  border-radius: 1rem;
  padding: 3.125rem;
  gap: 3.125rem;
`;

export const ProfileSelectionBoxImages = styled.img`
  width: 12.5rem;
`;

export const ProfileInput = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 1rem;
`;

export const ChoiceRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ChoiceRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
