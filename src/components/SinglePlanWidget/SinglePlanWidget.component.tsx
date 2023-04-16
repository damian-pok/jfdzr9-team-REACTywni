import { PlanWidgetArea, PlanContentArea } from "./SinglePlanWidget.styled";
import { SingleStepContainer, IconStep, TileStep } from "../UI/SingleStep/SingleStep.styled";
//Imports icons
import RegisterIcon from "./../../assets/icons/register-icon.svg";
import ProfilIcon from "./../../assets/icons/profil-icon.svg";
import DesignerIcon from "./../../assets/icons/designer-icon.svg";
import IssueOrderIcon from "./../../assets/icons/issue-an-order-icon.svg";
import CompleteOrderIcon from "./../../assets/icons/complete-orders-icon.svg";

export const SinglePlanWidget = () => {
  return (
    <>
      <PlanWidgetArea>
        <SingleStepContainer>
          <IconStep src={RegisterIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Zarejestruj się</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={ProfilIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Wypełnij profil</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={DesignerIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Znajdź Grafika!</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={IssueOrderIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Zleć zadanie</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
        <SingleStepContainer>
          <IconStep src={CompleteOrderIcon} alt="Ikonka licznika" />
          <PlanContentArea>
            <TileStep>Ciesz się efektami współpracy!</TileStep>
          </PlanContentArea>
        </SingleStepContainer>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidget;
