import LogoCarousel from "../LogoCarousel/LogoCarousel.components";
import { ParagraphStyle, PartnersField } from "./BusinessPartners.styled";

const BusinessPartners = () => {
  return (
    <PartnersField>
      <h2>Nasi partnerzy</h2>
      <ParagraphStyle>
        Firmy i organizacje, z którymi współpracujemy w celu osiągnięcia wspólnych celów i zapewnienia najwyższej
        jakości usług dla naszych klientów. Dzięki tym partnerstwom jesteśmy w stanie zapewnić jeszcze większą wartość
        dla naszych użytkowników i rozwijać się w dynamicznie zmieniającym się rynku.
      </ParagraphStyle>
      <LogoCarousel />
    </PartnersField>
  );
};
export default BusinessPartners;
