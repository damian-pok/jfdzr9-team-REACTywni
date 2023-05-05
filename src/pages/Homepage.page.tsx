import NavigationFreelancerClient from "./../components/Navigation-freelancer-client/NavigationFreelancerClient.components";
import Counter from "./../components/Counter/Counter.components";
import BusinessPartners from "../components/BusinessPartners/BusinessPartners.componentes";
import Contact from "../components/Contact/Contact.components";
import { ProfileWrapper } from "../components/ProfileClientFrame/ProfileClientFrame.styled";

const Homepage = () => {
  return (
    <ProfileWrapper>
      <div>
        <NavigationFreelancerClient />
        <Counter />
        <BusinessPartners />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Homepage;
