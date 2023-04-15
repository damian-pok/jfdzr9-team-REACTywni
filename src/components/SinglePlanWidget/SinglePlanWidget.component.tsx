import { PlanWidgetArea, Image, SinglePlanWidgetField, PlanContentArea } from "./SinglePlanWidget.styled";
import task from "./../../assets/task.svg";
import addUser from "./../../assets/addUser.svg";
import register from "./../../assets/register.svg";
import findGraphic from "./../../assets/findGraphic.svg";
import certificate from "./../../assets/certificate.svg";

export const SinglePlanWidget = () => {
  return (
    <>
      <PlanWidgetArea>
        <SinglePlanWidgetField>
          <Image src={register} alt="Zarejestruj się" />
          <PlanContentArea>
            <h3>Zarejestruj się</h3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <Image src={addUser} alt="Wypełnij profil" />
          <PlanContentArea>
            <h3>Wypełnij profil</h3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <Image src={findGraphic} alt="Znajdź grafika" />
          <PlanContentArea>
            <h3>Znajdź grafika</h3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <Image src={task} alt="task" />
          <PlanContentArea>
            <h3>Zleć zadanie</h3>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <Image src={certificate} alt="Efekt współpracy" />
          <PlanContentArea>
            <h3>Ciesz się efektami współpracy!</h3>
          </PlanContentArea>
        </SinglePlanWidgetField>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidget;
