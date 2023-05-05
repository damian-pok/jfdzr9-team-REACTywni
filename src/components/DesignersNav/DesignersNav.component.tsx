import { DesignersWrapper, HeadlineTitle } from "./DesignersNav.styled";
import { SingleDesignerWidget } from "../SingleDesignerWidget/SingleDesignerWidget.component";

export const DesignersNav = () => {
  return (
    <DesignersWrapper>
      <HeadlineTitle>Znajdź designera</HeadlineTitle>
      <SingleDesignerWidget />
    </DesignersWrapper>
  );
};
