import { ImagePage, PageNotFoundContainer } from "../components/PageNotFound/PageNotFound.styled";
import Image404 from "../assets/illustrations/404.svg";
import { PrimaryGreenButton } from "../components/UI/Buttons/Buttons.styled";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PageNotFoundContainer>
      <Link to={"/"}>
        <PrimaryGreenButton>Wróć do strony głównej</PrimaryGreenButton>
      </Link>
      <ImagePage src={Image404} />
    </PageNotFoundContainer>
  );
};

export default NotFound;
