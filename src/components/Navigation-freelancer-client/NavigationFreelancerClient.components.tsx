import { Link } from "react-router-dom";
import { PrimaryGreenButton } from "../UI/Buttons/Buttons.styled";
import { ComponentsField, NavigationBox, Images } from "./NavigationFreelancerClient.styled";
import DesignerIllustration from "./../../assets/illustrations/designer-illustration.svg";
import ClientIllustration from "./../../assets/illustrations/client-illustration.svg";

const NavigationFreelancerClient = () => {
  return (
    <ComponentsField>
      <NavigationBox>
        <Images src={DesignerIllustration} alt="Dla designera, przejście do strony głównej dla designerów" />
        <h2>Dla designera</h2>
        <p>
          Jeśli jesteś designerem, szukający dodatkowych zleceń dołącz do naszej bazy twórców! <br />
          Sprawdź jak działa nasz portal i przekonaj się jak łatwo zdobędziesz klientów nie ruszając się z domu.
        </p>
        <Link to={`/howfreelancer`}>
          <PrimaryGreenButton>dowiedz się więcej »</PrimaryGreenButton>
        </Link>
      </NavigationBox>
      <NavigationBox>
        <Images src={ClientIllustration} alt="Dla zleceniodawcy, przejście do strony głównej dla zleceniodawców" />
        <h2>Dla zleceniodawcy</h2>
        <p>
          Potrzebujesz twórcę do swojego projektu, a może szukasz freelancera do stałej współpracy? <br />
          Posiadamy bazę kilku tysięcy wykwalifikowanych specjalistów, którzy chętnie podejmą się Twojego zlecenia!
        </p>
        <Link to={`/howclient`}>
          <PrimaryGreenButton>dowiedz się więcej »</PrimaryGreenButton>
        </Link>
      </NavigationBox>
    </ComponentsField>
  );
};

export default NavigationFreelancerClient;
