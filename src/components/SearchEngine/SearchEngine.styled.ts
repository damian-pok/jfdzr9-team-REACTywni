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
  background-color: white;
  border: 1px solid #c2d1d9;
  border-radius: 3px;
  width: 320px;
  height: 40px;
  font-size: 1rem;
  padding: 0.3rem;
`;

export const SearchLabel = styled.label`
  position: relative;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const CategoryLabel = styled.p`
  display: grid;
  margin-top: 1.3rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const CheckboxList = styled.div`
  display: grid;
  gap: 0.5rem;
  -webkit-appearance: none;
  appearance: none;
`;

export const CheckboxLabel = styled.div`
  font-size: 1.2rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.7em;
  cursor: pointer;
  margin-top: 0.3rem;
  align-items: center;
`;

export const Input = styled.input`
  /* To hide default web look */
  appearance: none;
  margin: 0;

  /* Custom checkbox */
  width: 1.2em;
  height: 1.2em;

  border: 0.15em solid;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--blue-grey-color);
  }

  :checked::before {
    transform: scale(1);
  }
`;
