import NavigationFreelancerClient from "./../components/Navigation-freelancer-client/NavigationFreelancerClient.components";
import Counter from "./../components/Counter/Counter.components";
import BusinessPartners from "../components/BusinessPartners/BusinessPartners.componentes";
import Contact from "../components/Contact/Contact.components";

const Homepage = () => {
  return (
    <>
      <NavigationFreelancerClient />
      <Counter />
      <BusinessPartners />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
