import NavigationFreelancerClient from "./../components/Navigation-freelancer-client/NavigationFreelancerClient.components";
import Counter from "./../components/Counter/Counter.components";
import BusinessPartners from "../components/BusinessPartners/BusinessPartners.componentes";
import Contact from "../components/Contact/Contact.components";
import { ProfileWrapper, ProfileWrapperDiv } from "../components/ProfileClientFrame/ProfileClientFrame.styled";

const Homepage = () => {
  return (
    <ProfileWrapper>
      <ProfileWrapperDiv>
        <NavigationFreelancerClient />
        <Counter />
        <BusinessPartners />
        <div id="contact">
          <Contact />
        </div>
      </ProfileWrapperDiv>
    </ProfileWrapper>
  );
};

export default Homepage;
