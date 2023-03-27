import NavigationFreelancerClient from "./../components/Navigation-freelancer-client/NavigationFreelancerClient.components";
import Counter from "./../components/Counter/Counter.components";
import BusinessPartners from "../components/BusinessPartners/BusinessPartners.componentes";

const Homepage = () => {
  return (
    <>
      <NavigationFreelancerClient />
      <Counter />
      <BusinessPartners />
    </>
  );
};

export default Homepage;
