import styled from "styled-components";

export const SearchPageDescription = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeaderStyles = styled.h2`
  font-size: var(--Default-Headline-2-size);
  padding-bottom: 1.5rem;
`;

export const ParagraphStyles = styled.p`
  font-size: var(--Default-Body-size);
  padding-bottom: 2rem;
`;

export const SearchPageDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--Default-Distanse-beetween-sections);
`;

export const HowClientListArea = styled.ol`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HowClientDescriptionAreaItem = styled.li`
  font-size: var(--Default-Headline-3-size);
  //font-weight: bold;
`;
