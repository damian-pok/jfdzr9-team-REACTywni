import { Link } from "react-router-dom";
import { PrimaryButton } from "../UI/Buttons/Buttons.styled";
import { ComponentsField, NavigationBox } from "./NavigationFreelancerClient.styled";

const NavigationFreelancerClient = () => {
  return (
    <ComponentsField>
      <NavigationBox>
        <img
          src="./../../../public/deflaut-image-homepage.png"
          alt="Dla designera, przejście do strony głównej dla designerów"
        />
        <h2>Dla designera</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend, leo ac dictum bibendum, ante nunc
          dapibus nisl, nec finibus ex ipsum blandit felis. Quisque ut consequat enim. Sed vitae odio cursus, vehicula
          neque vitae, tincidunt diam.
        </p>
        <Link to={`/howfreelancer`}>
          <PrimaryButton>dowiedz się więcej</PrimaryButton>
        </Link>
      </NavigationBox>
      <NavigationBox>
        <img
          src="./../../../public/deflaut-image-homepage.png"
          alt="Dla zleceniodawcy, przejście do strony głównej dla zleceniodawców"
        />
        <h2>Dla zleceniodawcy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend, leo ac dictum bibendum, ante nunc
          dapibus nisl, nec finibus ex ipsum blandit felis. Quisque ut consequat enim. Sed vitae odio cursus, vehicula
          neque vitae, tincidunt diam.
        </p>
        <Link to={`/howclient`}>
          <PrimaryButton>dowiedz się więcej</PrimaryButton>
        </Link>
      </NavigationBox>
    </ComponentsField>
  );
};

export default NavigationFreelancerClient;
