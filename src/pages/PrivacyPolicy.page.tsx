import { SiteContainer } from "../components/RegisterForm/RegisterForm.styled";

const PrivacyPolicy = () => {
  return (
    <SiteContainer>
      <h1>Polityka prywatności</h1>
      <h4>Informacje ogólne</h4>
      <p>
        Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych zbieranych przez serwis
        internetowy (dalej: Serwis).
      </p>
      <h4>Administrator danych osobowych</h4>
      <p>
        Administratorem danych osobowych jest [Nazwa firmy], z siedzibą w [Adres siedziby], posiadająca numer NIP [Numer
        NIP] oraz REGON [Numer REGON], e-mail: [Adres e-mail].
      </p>
      <h4>Cele przetwarzania danych</h4>
      <p>Dane osobowe zbierane przez Serwis są przetwarzane w celu:</p>
      <ul>
        <li>świadczenia usług przez Serwis,</li>
        <li>realizacji zamówień przez użytkowników Serwisu,</li>
        <li>kontaktowania się z użytkownikami Serwisu w sprawach związanych z usługami i zamówieniami,</li>
        <li>wypełnienia obowiązków prawnych ciążących na Administratorze,</li>
        <li>w celach marketingowych Administratora.</li>
      </ul>
      <h4>Rodzaje zbieranych danych osobowych</h4>
      <p>Serwis może zbierać następujące kategorie danych osobowych:</p>
      <ul>
        <li>imię i nazwisko,</li>
        <li>adres e-mail,</li>
        <li>numer telefonu,</li>
        <li>adres zamieszkania,</li>
        <li>adres IP,</li>
        <li>dane dotyczące zamówień.</li>
      </ul>
      <h4>Pliki cookies</h4>
      <p>
        Serwis może wykorzystywać pliki cookies w celu dostosowania zawartości Serwisu do preferencji użytkownika oraz w
        celu zbierania anonimowych informacji dotyczących korzystania z Serwisu. Użytkownik ma możliwość wyłączenia
        obsługi plików cookies w ustawieniach swojej przeglądarki internetowej.
      </p>
      <h4>Udostępnianie danych osobowych</h4>
      <p>
        Administrator może udostępniać dane osobowe użytkowników Serwisu podmiotom upoważnionym na podstawie przepisów
        prawa.
      </p>
      <h4>Okres przechowywania danych osobowych</h4>
      <p>
        Dane osobowe zbierane przez Serwis są przechowywane przez okres niezbędny do realizacji celów, dla których
        zostały zebrane.
      </p>
      <h4>Prawa użytkownika</h4>
      <p>
        Użytkownik ma prawo dostępu do swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
        przenoszenia danych oraz wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.
      </p>
      <h4>Zmiany w polityce prywatności</h4>
      <p>
        Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Zmiany te będą
        publikowane na stronie Serwisu.
      </p>
      <h4>Kontakt</h4>
      <p>
        W sprawach związanych z ochroną danych osobowych użytkownicy Serwisu mogą kontaktować się z Administratorem za
        pomocą formularza kontaktowego lub na adres e-mail: [Adres e-mail].
      </p>

      <p>Niniejsza polityka prywatności wchodzi w życie z dniem [data wprowadzenia polityki prywatności].</p>
    </SiteContainer>
  );
};

export default PrivacyPolicy;
