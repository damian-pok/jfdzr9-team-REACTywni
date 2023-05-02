import {
  MainSiteBox,
  MainSiteContainer,
  TitleHeadline,
  OLStyle,
  ULStyle,
} from "../components/Additional Site Styles/PrivatyPolicy.styled";

const Statute = () => {
  return (
    <MainSiteContainer>
      <MainSiteBox>
        <h1>Regulamin serwisu internetowego</h1>
        <TitleHeadline>§ 1 Postanowienia ogólne</TitleHeadline>
        <OLStyle>
          <li>
            Niniejszy regulamin (dalej: Regulamin) określa zasady korzystania ze strony internetowej [adres strony
            internetowej] (dalej: Serwis) oraz prawa i obowiązki użytkowników Serwisu.
          </li>
          <li>
            Serwis prowadzony jest przez [nazwa firmy], z siedzibą w [adres siedziby], zarejestrowaną w rejestrze
            przedsiębiorców pod numerem [numer REGON lub KRS], NIP [numer NIP], posiadającą kapitał zakładowy w
            wysokości [kapitał zakładowy] zł.
          </li>
          <li>Korzystanie z Serwisu jest równoznaczne z akceptacją postanowień niniejszego Regulaminu.</li>
        </OLStyle>
        <TitleHeadline>§ 2 Korzystanie z Serwisu</TitleHeadline>
        <OLStyle>
          <li>Użytkownik zobowiązany jest do korzystania z Serwisu zgodnie z prawem oraz dobrymi obyczajami.</li>
          <li>Użytkownik ponosi pełną odpowiedzialność za treści zamieszczone przez niego na Serwisie.</li>
          <li>
            Użytkownik zobowiązany jest do zachowania poufności swojego hasła do Serwisu i nie udostępniania go osobom
            trzecim.
          </li>
        </OLStyle>
        <TitleHeadline>§ 3 Zawartość Serwisu</TitleHeadline>
        <OLStyle>
          <li>
            Wszystkie treści zamieszczone na Serwisie, w tym teksty, zdjęcia, grafiki, pliki dźwiękowe i wideo oraz
            oprogramowanie, są chronione prawem autorskim i stanowią własność [nazwa firmy] lub podmiotów trzecich.
          </li>
          <li>Korzystanie z treści zamieszczonych na Serwisie wymaga uzyskania zgody właściciela praw autorskich.</li>
        </OLStyle>
        <TitleHeadline>§ 4 Reklamacje</TitleHeadline>
        <OLStyle>
          <li>
            Użytkownik może składać reklamacje dotyczące działania Serwisu za pośrednictwem formularza kontaktowego lub
            na adres e-mail: [adres e-mail].
          </li>
          <li>Reklamacja powinna zawierać dokładny opis problemu oraz dane kontaktowe reklamującego.</li>
          <li>
            Administrator zobowiązuje się do rozpatrzenia reklamacji w ciągu 14 dni od jej otrzymania i udzielenia
            odpowiedzi na adres e-mail podany przez reklamującego.
          </li>
        </OLStyle>
        <TitleHeadline>§ 5 Odpowiedzialność</TitleHeadline>
        <OLStyle>
          <li>
            Administrator nie ponosi odpowiedzialności za szkody wynikłe z nieprawidłowego korzystania przez użytkownika
            z Serwisu.
          </li>
          <li>Administrator nie ponosi odpowiedzialności za treści zamieszczone przez użytkowników Serwisu.</li>
          <li>
            Administrator nie ponosi odpowiedzialności za przerwy w działaniu Serwisu wynikłe z przyczyn niezależnych od
            niego.
          </li>
        </OLStyle>
        <TitleHeadline>§ 6 Dane osobowe w Sklepie internetowym</TitleHeadline>
        <OLStyle>
          <li>
            Administratorem danych osobowych Klientów zbieranych za pośrednictwem Sklepu internetowego jest Sprzedawca.
          </li>
          <li>
            Dane osobowe Klientów zbierane przez administratora za pośrednictwem Sklepu internetowego zbierane są w celu
            realizacji Umowy Sprzedaży, a jeżeli Klient wyrazi na to zgodę - także w celu marketingowym.
          </li>
          <li>
            Odbiorcami danych osobowych Klientów Sklepu internetowego mogą być:
            <ULStyle>
              <li>
                W przypadku Klienta, który korzysta w Sklepie internetowym ze sposobu dostawy przesyłką pocztową lub
                przesyłką kurierską, Administrator udostępnia zebrane dane osobowe Klienta wybranemu przewoźnikowi lub
                pośrednikowi realizującemu przesyłki na zlecenie Administratora.
              </li>
              <li>
                W przypadku Klienta, który korzysta w Sklepie internetowym ze sposobu płatności elektronicznych lub
                kartą płatniczą Administrator udostępnia zebrane dane osobowe Klienta, wybranemu podmiotowi
                obsługującemu powyższe płatności w Sklepie internetowym.
              </li>
            </ULStyle>
          </li>
          <li>Klient ma prawo dostępu do treści swoich danych oraz ich poprawiania.</li>
          <li>
            Podanie danych osobowych jest dobrowolne, aczkolwiek niepodanie wskazanych w Regulaminie danych osobowych
            niezbędnych do zawarcia Umowy Sprzedaży skutkuje brakiem możliwości zawarcia tejże umowy.
          </li>
        </OLStyle>
        <TitleHeadline>§ 7 Postanowienia końcowe</TitleHeadline>
        <OLStyle>
          <li>Umowy zawierane poprzez Sklep internetowy zawierane są w języku polskim.</li>
          <li>
            Sprzedawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych przyczyn to jest: zmiany
            przepisów prawa, zmiany sposobów płatności i dostaw - w zakresie, w jakim te zmiany wpływają na realizację
            postanowień niniejszego Regulaminu. O każdej zmianie Sprzedawca poinformuje Klienta z co najmniej 7 dniowym
            wyprzedzeniem.
          </li>
          <li>
            W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy
            prawa polskiego, w szczególności: Kodeksu cywilnego; ustawy o świadczeniu usług drogą elektroniczną; ustawy
            o prawach konsumenta, ustawy o ochronie danych osobowych.
          </li>
          <li>
            Klient ma prawo skorzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń. W tym
            celu może złożyć skargę za pośrednictwem unijnej platformy internetowej ODR dostępnej pod adresem:
            http://findadesigner.pl
          </li>
        </OLStyle>
      </MainSiteBox>
    </MainSiteContainer>
  );
};

export default Statute;
