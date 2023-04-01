import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import DeflautImageCounter from "./../../assets/deflaut-image-counter.png";

export const SinglePlanWidget = () => {
  return (
    <PlanWidgetArea>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Przed rozpoczęciem projektu, dokładnie opisz swoje oczekiwania, cele i potrzeby, aby grafik miał pełny obraz
            tego, co chcesz osiągnąć.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Bądź konkretny w swoim feedbacku i próbuj wskazać, co Ci się podoba i co wymaga poprawy. Graficy potrzebują
            konstruktywnego feedbacku, aby móc dostosować swoją pracę do Twoich potrzeb.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Szanuj czas i wysiłek, jaki wkłada grafik w Twój projekt. Zadawaj pytania i wyrażaj swoje potrzeby, ale
            jednocześnie bądź realistą i nie oczekuj, że projekt zostanie zrealizowany w ciągu kilku godzin.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Bądź gotowy na współpracę i otwarty na sugestie i propozycje grafika. Często graficy mają wiedzę i
            doświadczenie, które pomogą Ci osiągnąć lepsze wyniki, dlatego ważne jest, aby być otwartym na ich sugestie.
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
    </PlanWidgetArea>
  );
};

export default SinglePlanWidget;
