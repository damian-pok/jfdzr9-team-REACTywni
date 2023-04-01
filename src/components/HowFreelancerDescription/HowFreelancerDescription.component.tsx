import {
  HowFreelancerDescriptionArea,
  HowFreelancerDescriptionAreaItem,
  HowFreelancerDescriptionAreaList,
  HowFreelancerDescriptionAreaWrapper,
} from "./HowFreelancerDescription.styled";
import SinglePlanWidgetFreelancer from "../SinglePlanWidget/SinglePlanWidgetFreelancer.component";

export const HowFreelancerDescription = () => {
  return (
    <HowFreelancerDescriptionAreaWrapper>
      <HowFreelancerDescriptionArea>
        <h1>Znajdź zlecenie</h1>
        <p>
          Jeśli szukasz pracy jako grafik, warto skorzystać z naszego portalu oferującego ogłoszenia z ofertami pracy w
          tej dziedzinie. Dzięki takim portalom, jak nasz masz szansę na znalezienie wymarzonej pracy i rozwój swojej
          kariery zawodowej. W naszym portalu, możesz znaleźć najnowsze oferty pracy, dowiedzieć się o wymaganiach
          pracodawców oraz oczekiwaniach wobec kandydatów. Korzystając z naszego portalu, masz szansę na znalezienie
          idealnej pracy dla siebie, a także na rozwój swojej kariery w dziedzinie grafiki.
        </p>

        <HowFreelancerDescriptionAreaList>
          <h1>Pierwsze kroki:</h1>
          <HowFreelancerDescriptionAreaItem>Zarejestruj się</HowFreelancerDescriptionAreaItem>
          <HowFreelancerDescriptionAreaItem>Wypełnij profil</HowFreelancerDescriptionAreaItem>
          <HowFreelancerDescriptionAreaItem>Pochwal się swoimi projektami</HowFreelancerDescriptionAreaItem>
          <HowFreelancerDescriptionAreaItem>Otrzymuj zlecenia!</HowFreelancerDescriptionAreaItem>
          <HowFreelancerDescriptionAreaItem>Zarabiaj z nami $ :D $</HowFreelancerDescriptionAreaItem>
        </HowFreelancerDescriptionAreaList>
      </HowFreelancerDescriptionArea>
      <SinglePlanWidgetFreelancer />
    </HowFreelancerDescriptionAreaWrapper>
  );
};
