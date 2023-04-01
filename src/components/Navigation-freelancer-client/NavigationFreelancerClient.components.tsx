import { Link } from "react-router-dom";
import { ButtonBlack } from "../UI/Buttons/Buttons.styled";
import { ComponentsField, NavigationBox } from "./NavigationFreelancerClient.styled";
import DeflautImageHomepage from "./../../assets/deflaut-image-homepage.png";

const NavigationFreelancerClient = () => {
  return (
    <ComponentsField>
      <NavigationBox>
        <img src={DeflautImageHomepage} alt="Dla designera, przejście do strony głównej dla designerów" />
        <h2>Dla designera</h2>
        <p>
          Jeśli jesteś designerem, szukający dodatkowych zleceń dołącz do naszej bazy twórców! <br />
          Sprawdź jak działa nasz portal i przekonaj się jak łatwo zdobędziesz klientów nie ruszając się z domu.
        </p>
        <Link to={`/howfreelancer`}>
          <ButtonBlack>dowiedz się więcej »</ButtonBlack>
        </Link>
      </NavigationBox>
      <NavigationBox>
        <img src={DeflautImageHomepage} alt="Dla zleceniodawcy, przejście do strony głównej dla zleceniodawców" />
        <h2>Dla zleceniodawcy</h2>
        <p>
          Potrzebujesz twórcę do swojego projektu, a może szukasz freelancera do stałej współpracy? <br />
          Posiadamy bazę kilku tysięcy wykwalifikowanych specjalistów, którzy chętnie podejmą się Twojego zlecenia!
        </p>
        <Link to={`/howclient`}>
          <ButtonBlack>dowiedz się więcej »</ButtonBlack>
        </Link>
      </NavigationBox>
    </ComponentsField>
  );
};

export default NavigationFreelancerClient;
