import styled from "styled-components";

export const DesignerWidget = styled.div`
  //height: fit-content;
  //height: 500px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 2fr 1fr;
  column-gap: 1.8rem;
  border-radius: 1rem;
  background-color: var(--cardgroundcolor);
  padding: 2rem;
  margin-bottom: 50px;
  //margin-top: 10px;
`;

export const DesignerPhoto = styled.img`
  height: 7.3rem;
  width: 10rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const DesignerName = styled.h4`
  font-size: var(--Default-Body-size);
  font-weight: bold;
`;

export const DesignerDescription = styled.p`
  font-size: var(--Default-Body-size);
`;

export const TagsWrapper = styled.div`
  display: grid;
  grid-column: 1 / span 2;
`;

export const DesignerTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.7rem;
  margin-bottom: 0.7rem;
  //height: auto;
  width: fit-content;
  grid-column: 1 / span 2;
`;

export const DesignerTagsSecond = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  width: fit-content;
  grid-column: 1 / span 2;
`;

export const Tag = styled.p`
  color: var(--primarygreenbuttontext);
  height: 30px;
  font-size: bold;
  background-color: var(--categoriesBackgroundColors);
  border-radius: 0.3rem;
  padding: 0.2rem 2rem;
  text-align: center;
`;

export const TagSecond = styled.p`
  height: fit-content;
  color: var(--textcolor);
  font-size: bold;
  border: 0.1rem solid var(--tagBorderColors);
  border-radius: 0.3rem;
  padding: 0.2rem 2rem;
  text-align: center;
`;

export const DesignerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.p`
  display: flex;
  flex-direction: row;
`;

export const DesignerWidgetWrapper = styled.div`
  margin-bottom: 30px;
`;

export const DesignerWidgetInput = styled.input`
  min-width: 400px;
  text-indent: 10px;
  border-radius: 5px;
`;

export const DesignerWidgetInputOrder = styled.textarea`
  min-width: 400px;
  text-indent: 10px;
  border-radius: 5px;
  height: 100px;
`;

export const DesignerContentAboutMe = styled.div`
  //height: 300px;
`;
