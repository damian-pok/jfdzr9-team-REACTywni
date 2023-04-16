import { Link } from "react-router-dom";
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
  padding-top: var(--Default-Distanse-beetween-sections);
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
  line-height: 0.5rem;
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

//Login components

//Register components

export const RegisterFormStyled = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--lime-yellow);
  border: solid 2px var(--black);
  border-radius: 15px;
  border-radius: 1rem;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

export const HeadlineTitle = styled.h2`
  padding: 1.5rem 0;
  border-bottom: 2px solid var(--black);
  width: 100%;
  text-align: center;
`;

export const LoginField = styled.h2`
  border-top: 2px solid var(--black);
  padding: 1.5rem 0;
  width: 100%;
  text-align: center;
`;

export const LoginLink = styled(Link)`
  font-size: 1rem;
  padding: 10px 40px;
  width: fit-content;
  border: 2px solid var(--black);
  border-radius: 0.5rem;
  color: var(--black);
  :hover {
    color: var(--white-color);
    background-color: var(--black);
  }
`;

export const ButtonRegister = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  color: var(--white-color);
  background-color: var(--black);
  font-weight: bold;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;
  :hover {
    color: var(--black);
    background-color: var(--lime-yellow);
  }
`;
