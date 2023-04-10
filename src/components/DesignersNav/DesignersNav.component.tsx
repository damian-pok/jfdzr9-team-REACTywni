import { DesignersWrapper } from "./DesignersNav.styled";
import { SingleDesignerWidget } from "../SingleDesignerWidget/SingleDesignerWidget.component";

export const DesignersNav = () => {
  return (
    <DesignersWrapper>
      <h2>Znajdź designera</h2>
      <SingleDesignerWidget />
    </DesignersWrapper>
  );
};
