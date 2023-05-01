import styled from "styled-components";

export const SectionContactField = styled.div`
  max-width: var(--Default-Body-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
  padding: var(--Default-Distanse-beetween-sections) 0;
`;

export const ContactField = styled.div`
  width: 46.88rem;
  height: 31.25rem;
  background-color: var(--cardgroundcolor);
  border-radius: 1rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
`;

export const InformationField = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

export const IconCointainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1rem;
  gap: 1rem;
`;

export const IconField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ImageContact = styled.img`
  width: 16.25rem;
  height: auto;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: auto;
`;
