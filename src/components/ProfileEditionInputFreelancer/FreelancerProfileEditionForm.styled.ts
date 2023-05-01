import styled from "styled-components";

export const FreelancerProfileEditionWrapper = styled.div`
  background: #f3f3f6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 39px 30px 39px 30px;
  row-gap: 0.8rem;
  grid-row: 1 / span auto;
`;

export const FreelancerDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

export const FreelancerInputArea = styled.div`
  display: grid;
`;

export const EditionField = styled.input`
  background-color: white;
  border: 1px solid #c2d1d9;
  border-radius: 3px;
  width: 320px;
  height: 40px;
  font-size: 1rem;
  padding: 0.3rem;
`;

export const EditionLabel = styled.p`
  display: grid;
  margin-top: 0.3rem;
  font-size: 16px;
  font-weight: bold;
`;

export const FreelancerCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  column-gap: 9.9rem;
  /* column-gap: 2rem; */
  -webkit-appearance: none;
  appearance: none;
`;

export const FreelancerCheckboxLabel = styled.div`
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.7em;
  cursor: pointer;
  margin-top: 0.3rem;
  align-items: center;
`;

export const EditionInput = styled.input`
  /* To hide default web look */
  appearance: none;
  margin: 0;

  /* Custom checkbox */
  width: 1.5em;
  height: 1em;

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
    box-shadow: inset 1em 1em var(--primary-dark-navy);
  }

  :checked::before {
    transform: scale(1);
  }
`;

export const SubmitChangesButtonSecondary = styled.button`
  align-self: center;
  background-color: var(--primary-green);
  padding: 0.6rem 1.6rem;
  border-radius: 5px;
  margin-top: 0.8rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  :hover {
    background-color: var(--primary-dark-navy);
    color: var(--secondary-very-light-grey);
    transform: scale(1.05);
    border-color: var(--secondary-very-light-grey);
  }
`;

export const SubmitChangesButtonPrimary = styled.button`
  align-self: center;
  background: none;
  padding: 0.6rem 1.6rem;
  border-radius: 5px;
  margin-top: 0.8rem;
  cursor: pointer;

  :hover {
    background-color: var(--primary-dark-navy);
    color: var(--secondary-very-light-grey);
  }
`;
