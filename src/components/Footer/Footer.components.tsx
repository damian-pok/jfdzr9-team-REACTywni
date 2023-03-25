import { FooterField, FooterNavField, LinkFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterField>
      <p>©2023 - Find a Designer | All right reserved</p>
      <FooterNavField>
        <LinkFooter to={`/howfreelancer`}>Designer</LinkFooter>
        <LinkFooter to={`/howclient`}>Zleceniodawca</LinkFooter>
        <LinkFooter to={`/privacy-policy`}>Polityka prywatności</LinkFooter>
        <LinkFooter to={`/statue`}>Regulamin</LinkFooter>
      </FooterNavField>
    </FooterField>
  );
};

export default Footer;
