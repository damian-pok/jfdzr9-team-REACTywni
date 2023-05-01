import styled from "styled-components";

export const SearchEngineWrapper = styled.div`
  width: 23.75rem;
  height: fit-content;
  background: var(--cardgroundcolor);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 39px 30px 39px 30px;
  row-gap: 0.8rem;
  grid-row: 1 / span auto;
`;

export const SearchFieldInput = styled.input`
  width: 20rem;
  min-height: 2.5rem;
  background-color: var(--secoundary-white);
  border: 2px solid var(--secoundary-grey);
  border-radius: 0.2rem;
  padding-left: 1rem;
  color: var(--primary-dark-navy);
  ::placeholder {
    color: var(--secoundary-grey);
  }
  &:focus {
    outline-color: var(--primary-green);
  }
`;

export const SearchLabel = styled.label`
  position: relative;
  font-size: var(--Default-Body-size);
  font-weight: bold;
  padding-bottom: 0.1rem;
`;

export const CategoryLabel = styled.p`
  font-size: var(--Default-Body-size);
  display: grid;
  font-weight: bold;
  padding-bottom: 0.1rem;
  margin-top: 2.5rem;
`;

export const CheckboxList = styled.div`
  display: grid;
  gap: 0.5rem;
  -webkit-appearance: none;
  appearance: none;
`;

export const CheckboxLabel = styled.div`
  font-size: var(--Default-Body-size);
  display: grid;
  grid-template-columns: 1em auto;
  gap: 1.5rem;
  cursor: pointer;
  margin-top: 0.3rem;
  align-items: center;
`;

export const Input = styled.input`
  /* To hide default web look */
  appearance: none;
  margin: 0;
  padding: 0;

  /* Custom checkbox */
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--boxInputBackgroundColor);

  border: 0.1rem solid var(--boxInputBorderColor);
  border-radius: 0.3rem;

  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 0.3rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--boxInputBorderColor);
  }

  :checked::before {
    transform: scale(1);
  }
`;
