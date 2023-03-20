//import libraries:
import { Link } from "react-router-dom";

//import components:

const LinkContainer = () => {
  return (
    <div>
      <h1>Kontener linków!</h1>
      <ol>
        <li>
          <Link to={`/homepage`}>Homepage</Link>
        </li>
        <li>
          <Link to={`/admin`}>Admin Panel</Link>
        </li>
        <li>
          <Link to={`/howclient`}>How it works - for client</Link>
        </li>
        <li>
          <Link to={`/howfreelancer`}>How it works - for freelancer</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/client`}>Client Profile</Link>
        </li>
        <li>
          <Link to={`/freelancer`}>Freelancer Profile</Link>
        </li>
        <li>
          <Link to={`/register`}>Register</Link>
        </li>
        <li>
          <Link to={`/search`}>Search</Link>
        </li>
        <li>
          <Link to={`/not-found`}>Page not found</Link>
        </li>
      </ol>
    </div>
  );
};

export default LinkContainer;
