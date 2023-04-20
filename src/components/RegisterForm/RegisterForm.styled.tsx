import styled from "styled-components";

//General Styles
export const SiteContainer = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--Default-Distanse-beetween-sections) 0;
`;

export const FormContainer = styled.div`
  width: 47.5rem;
  height: fit-content;
  background-color: var(--secondary-light-grey);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
  border-radius: 1rem;
`;

export const HeaderStyles = styled.h2`
  font-size: var(--Default-Headline-2-size);
  padding-bottom: 1.5rem;
`;

export const ImageStyle = styled.img`
  width: 16.25rem;
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1rem;
`;

export const LabelStyle = styled.label`
  font-size: var(--Default-Body-size);
  font-weight: bold;
  line-height: 1rem;
`;

export const RegisterLabelStyle = styled.label`
  font-size: var(--Default-Body-size);
  font-weight: bold;
  line-height: 1rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

export const AnotherContainer = styled.div`
  width: 47.5rem;
  height: 6rem;
  background-color: var(--secondary-light-grey);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5rem;
  gap: 3rem;
`;

export const RegisterNavyButton = styled.button`
  width: fit-content;
  height: 2.5rem;
  padding: 1.25rem 2.5rem;
  color: var(--secondary-very-light-grey);
  background-color: var(--primary-dark-navy);
  font-weight: bold;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  cursor: pointer;
  :hover {
    background-color: var(--additional-navy);
  }
`;
