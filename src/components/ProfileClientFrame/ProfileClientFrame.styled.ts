import styled from "styled-components";

export const ProfileClientFrame = styled.div`
  width: 800px;
  padding: 30px;
  border: solid 1px black;
  border-radius: 15px;
  box-shadow: 10px 10px 5px lightblue;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--very-light-grey-color);
`;

export const ProfileClientFrameLogo = styled.img`
  border-radius: 15px;
`;

export const ProfileClientFrameData = styled.div`
  padding-left: 30px;
`;

export const ProfileClientFrameKey = styled.span`
  font-weight: bold;
  padding-right: 20px;
`;

export const ProfileClientFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

// ---------------------------------------------------------------

export const ProfileClientContainer = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2.5rem;
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
  gap: 2rem;
`;

export const ProfileInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ProfileClientLogo = styled.img`
  border-radius: 15px;
  width: 26.875rem;
  height: 18.75rem;
`;

export const ProfileClientTitleCategories = styled.h4`
  font-size: var(--Default-Headline-4-size);
  font-weight: bold;
  margin-top: 1rem;
`;

export const ProfileClientParagraph = styled.p`
  font-size: var(--Default-Body-size);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ProfileClientCover = styled.img`
  width: var(--Default-Body-width);
  height: auto;
  border-radius: 1rem 1rem 0 0;
  margin-top: var(--Default-Distanse-beetween-sections);
`;

export const ProfileClientAbout = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ProfileClientTitle = styled.h3`
  font-size: var(--Default-Headline-3-size);
  font-weight: bold;
`;

export const ProfileClientCategories = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ProfileClientCategoriesLast = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ProfileClientCategoriesVeryLast = styled.div`
  max-width: var(--Default-Body-width);
  //height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 100px;
`;

export const CategoriesBox = styled.button`
  background-color: var(--primarygreenbuttonbackground);
  color: var(--primarygreenbuttontext);
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

export const CategoriesButtonBox = styled.div`
  max-width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TagBox = styled.p`
  color: var(--textcolor);
`;

export const ProfileClientGalery = styled.div`
  max-width: var(--Default-Body-width);
  height: fit-content;
  background-color: var(--cardgroundcolor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  border-radius: 1rem;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: var(--Default-Distanse-beetween-sections);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
