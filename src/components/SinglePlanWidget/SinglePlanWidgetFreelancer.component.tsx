import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import DeflautImageCounter from "./../../assets/deflaut-image-counter.png";

export const SinglePlanWidgetFreelancer = () => {
  return (
    <PlanWidgetArea>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla Grafika</h3>
          <p>
            Zawsze zachowuj oryginalne pliki graficzne i twórz kopie zapasowe, aby uniknąć utraty pracy w przypadku
            awarii sprzętu lub oprogramowania.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla Grafika</h3>
          <p>
            Staraj się korzystać z narzędzi i oprogramowania, które znasz najlepiej, ale jednocześnie bądź otwarty na
            nowe technologie i umiejętności.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla Grafika</h3>
          <p>
            Skup się na rozwijaniu swojego stylu i wypracowaniu własnego sposobu pracy, który będzie dla Ciebie
            najbardziej efektywny i satysfakcjonujący.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla Grafika</h3>
          <p>
            Pamiętaj, że praca grafika komputerowego polega na tworzeniu produktów dla innych osóbi ważne jest, aby
            umieć dostosowywać się do ich potrzeb.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
    </PlanWidgetArea>
  );
};

export default SinglePlanWidgetFreelancer;
