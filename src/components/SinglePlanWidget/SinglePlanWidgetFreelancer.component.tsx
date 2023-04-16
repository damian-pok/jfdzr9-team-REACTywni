import { Headlines3, PlanWidgetArea, ImagesIcons } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import { HeaderStyles } from "../HowFreelancerDescription/HowFreelancerDescription.styled";

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
        <SinglePlanWidgetField>
          <ImagesIcons src={RegisterIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <Headlines3>Zarejestruj się</Headlines3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <ImagesIcons src={ProfileIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <Headlines3>Wypełnij profil</Headlines3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <ImagesIcons src={ProjectsIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <Headlines3>Pochwal się projektami</Headlines3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <ImagesIcons src={OrdersIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <Headlines3>Otrzymuj zlecenia!</Headlines3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <ImagesIcons src={MoneyIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <Headlines3>Zarabiaj z nami $</Headlines3>
          </PlanContentArea>
        </SinglePlanWidgetField>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidgetFreelancer;
