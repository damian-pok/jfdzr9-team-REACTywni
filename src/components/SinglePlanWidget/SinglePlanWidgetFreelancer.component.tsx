import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import DeflautImageCounter from "./../../assets/deflaut-image-counter.png";

export const SinglePlanWidgetFreelancer = () => {
  return (
    <>
      <h1>Pierwsze kroki:</h1>
      <PlanWidgetArea>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 1</h3>
            <p>Zarejestruj się</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 2</h3>
            <p>Wypełnij profil.</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 3</h3>
            <p>Pochwal się swoimi projektami</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 4</h3>
            <p>Otrzymuj zlecenia i zarabiaj z nami!</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidgetFreelancer;
