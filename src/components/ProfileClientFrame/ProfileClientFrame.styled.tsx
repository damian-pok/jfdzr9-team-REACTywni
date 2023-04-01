import styled from "styled-components";

export const ProfileClientFrame = styled.div`
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
