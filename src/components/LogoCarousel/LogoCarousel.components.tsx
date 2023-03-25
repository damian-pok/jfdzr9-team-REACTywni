import { LogoField, LogoStyles } from "./LogoCarousel.styled";

const LogoCarousel = () => {
  return (
    <LogoField>
      <LogoStyles src="./../../../public/bank-millenium-logo.svg" />
      <LogoStyles src="./../../../public/credit-agricole-logo.svg" />
      <LogoStyles src="./../../../public/jack-daniels-logo.svg" />
      <LogoStyles src="./../../../public/kfc-logo.svg" />
      <LogoStyles src="./../../../public/mcdonalds-logo.svg" />
      <LogoStyles src="./../../../public/nike-logo.svg" />
      <LogoStyles src="./../../../public/pepsi-logo.svg" />
      <LogoStyles src="./../../../public/samsung-logo.svg" />
    </LogoField>
  );
};
export default LogoCarousel;
