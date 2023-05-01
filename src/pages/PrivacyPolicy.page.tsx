import {
  MainSiteBox,
  MainSiteContainer,
  TitleHeadline,
  ULStyle,
} from "../components/Additional Site Styles/PrivatyPolicy.styled";

const PrivacyPolicy = () => {
  return (
    <MainSiteContainer>
      <MainSiteBox>
        <h1>Polityka prywatności</h1>
        <TitleHeadline>Informacje ogólne</TitleHeadline>
        <p>
          Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych zbieranych przez serwis
          internetowy (dalej: Serwis).
        </p>
        <TitleHeadline>Administrator danych osobowych</TitleHeadline>
        <p>
          Administratorem danych osobowych jest [Nazwa firmy], z siedzibą w [Adres siedziby], posiadająca numer NIP
          [Numer NIP] oraz REGON [Numer REGON], e-mail: [Adres e-mail].
        </p>
        <TitleHeadline>Cele przetwarzania danych</TitleHeadline>
        <p>Dane osobowe zbierane przez Serwis są przetwarzane w celu:</p>
        <ULStyle>
          <li>świadczenia usług przez Serwis,</li>
          <li>realizacji zamówień przez użytkowników Serwisu,</li>
          <li>kontaktowania się z użytkownikami Serwisu w sprawach związanych z usługami i zamówieniami,</li>
          <li>wypełnienia obowiązków prawnych ciążących na Administratorze,</li>
          <li>w celach marketingowych Administratora.</li>
        </ULStyle>
        <TitleHeadline>Rodzaje zbieranych danych osobowych</TitleHeadline>
        <p>Serwis może zbierać następujące kategorie danych osobowych:</p>
        <ULStyle>
          <li>imię i nazwisko,</li>
          <li>adres e-mail,</li>
          <li>numer telefonu,</li>
          <li>adres zamieszkania,</li>
          <li>adres IP,</li>
          <li>dane dotyczące zamówień.</li>
        </ULStyle>
        <TitleHeadline>Pliki cookies</TitleHeadline>
        <p>
          Serwis może wykorzystywać pliki cookies w celu dostosowania zawartości Serwisu do preferencji użytkownika oraz
          w celu zbierania anonimowych informacji dotyczących korzystania z Serwisu. Użytkownik ma możliwość wyłączenia
          obsługi plików cookies w ustawieniach swojej przeglądarki internetowej.
        </p>
        <TitleHeadline>Udostępnianie danych osobowych</TitleHeadline>
        <p>
          Administrator może udostępniać dane osobowe użytkowników Serwisu podmiotom upoważnionym na podstawie przepisów
          prawa.
        </p>
        <TitleHeadline>Okres przechowywania danych osobowych</TitleHeadline>
        <p>
          Dane osobowe zbierane przez Serwis są przechowywane przez okres niezbędny do realizacji celów, dla których
          zostały zebrane.
        </p>
        <TitleHeadline>Prawa użytkownika</TitleHeadline>
        <p>
          Użytkownik ma prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia
          przetwarzania, przenoszenia danych oraz wniesienia skargi do organu nadzorczego zajmującego się ochroną danych
          osobowych.
        </p>
        <TitleHeadline>Zmiany w polityce prywatności</TitleHeadline>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Zmiany te będą
          publikowane na stronie Serwisu.
        </p>
        <TitleHeadline>Kontakt</TitleHeadline>
        <p>
          W sprawach związanych z ochroną danych osobowych użytkownicy Serwisu mogą kontaktować się z Administratorem za
          pomocą formularza kontaktowego lub na adres e-mail: [Adres e-mail].
        </p>

        <p>Niniejsza polityka prywatności wchodzi w życie z dniem [data wprowadzenia polityki prywatności].</p>
      </MainSiteBox>
    </MainSiteContainer>
  );
};

export default PrivacyPolicy;
