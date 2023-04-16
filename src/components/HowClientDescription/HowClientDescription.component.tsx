import { Link } from "react-router-dom";
import { PrimaryNavyButton } from "../UI/Buttons/Buttons.styled";
import {
  SearchPageDescription,
  SearchPageDescriptionWrapper,
  HeaderStyles,
  ParagraphStyles,
} from "./HowClientDescription.styled";

const HowClientDescription = () => {
  return (
    <SearchPageDescriptionWrapper>
      <SearchPageDescription>
        <HeaderStyles>Znajdź designera</HeaderStyles>
        <ParagraphStyles>
          Jeśli potrzebujesz profesjonalnych usług grafika, warto skorzystać z naszego portalu. Dzięki temu masz szansę
          na znalezienie doświadczonego specjalisty, który pomoże Ci w realizacji projektów graficznych. Nasz portal
          oferuje szeroki wybór grafików o różnym doświadczeniu i specjalizacji, co pozwoli Ci na znalezienie osoby
          odpowiedniej do konkretnego zadania. Oprócz tego, korzystanie z naszego portalu jest bezpieczne, ponieważ
          oferuje on możliwość podglądu portfolio oraz opinii innych klientów. Dzięki temu możesz mieć pewność, że
          wybierasz najlepszego specjalistę do swojego projektu. Korzystając z naszego portalu oferującego usługi
          graficzne, masz szansę na zrealizowanie swoich pomysłów z wykorzystaniem najlepszych narzędzi i doświadczenia
          specjalistów z całego świata, co pozwala na osiągnięcie najlepszych efektów.
        </ParagraphStyles>
        <Link to={`/search`}>
          <PrimaryNavyButton>Przejdź do wyszukiwarki</PrimaryNavyButton>
        </Link>
      </SearchPageDescription>
    </SearchPageDescriptionWrapper>
  );
};

export default HowClientDescription;
