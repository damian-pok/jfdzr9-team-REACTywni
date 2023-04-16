import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import { HeaderStyles } from "../HowFreelancerDescription/HowFreelancerDescription.styled";
import { SingleStepContainer, IconStep, TileStep } from "../UI/SingleStep/SingleStep.styled";
//Imports icons
import RegisterIcon from "./../../assets/icons/register-icon.svg";
import ProfileIcon from "./../../assets/icons/profil-icon.svg";
import ProjectsIcon from "./../../assets/icons/projects-icon.svg";
import MoneyIcon from "./../../assets/icons/money-icon.svg";
import OrdersIcon from "./../../assets/icons/orders-graphics-icon.svg";

export const SinglePlanWidgetFreelancer = () => {
  return (
    <>
      <HeaderStyles>Jak to działa?</HeaderStyles>
      <PlanWidgetArea>
        <SingleStepContainer>
          <IconStep src={RegisterIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Zarejestruj się</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={ProfileIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Wypełnij profil</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={ProjectsIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Pochwal się projektami</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={OrdersIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Otrzymuj zlecenia!</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={MoneyIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Zarabiaj z nami $</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidgetFreelancer;
