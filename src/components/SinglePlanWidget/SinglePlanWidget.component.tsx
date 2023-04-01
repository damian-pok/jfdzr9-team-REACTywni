import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import DeflautImageCounter from "./../../assets/deflaut-image-counter.png";

export const SinglePlanWidget = () => {
  return (
    <>
      <h1>Pierwsze kroki:</h1>
      <PlanWidgetArea>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 1</h3>
            <p>Zarejestruj się.</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 1</h3>
            <p>Wypełnij profil.</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 3</h3>
            <p>Znajdź Grafika i zleć zadanie!</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
        <SinglePlanWidgetField>
          <img src={DeflautImageCounter} alt="Ikonka licznika" />
          <PlanContentArea>
            <h3>Krok 4</h3>
            <p>Ciesz się efektami współpracy! :D</p>
          </PlanContentArea>
        </SinglePlanWidgetField>
      </PlanWidgetArea>
    </>
  );
};

export default SinglePlanWidget;
