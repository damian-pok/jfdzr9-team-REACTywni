import { FAQArea } from "./FAQ.styled";
import { SingleQuestion } from "../SingleQuestion/SingleQuestion.component";

export const FAQFreelancer = () => {
  return (
    <FAQArea>
      <h2>Najczęściej zadawane pytania</h2>
      <SingleQuestion
        question="Ile to kosztuje?"
        answear="Nic. Współpraca z nami jest darmowa. Utrzymujemy się z reklam i umów sponsorskich."
      />
      <SingleQuestion question="Nie mogę się zarejestrować?" answear="Skontaktuj się z naszą infolinią." />
      <SingleQuestion question="Nie dostaję adnych zleceń?" answear="Uzupełnij profil i swoje portfolio." />
      <SingleQuestion
        question="Ile mam czasu na wykonanie projektu?"
        answear="Wszystko zależy od ustaleń z klientem."
      />
    </FAQArea>
  );
};
