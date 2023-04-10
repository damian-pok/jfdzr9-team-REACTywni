import { DesignersWrapper } from "./DesignerNav.styled";
import { SingleDesignerWidget } from "../SingleDesignerWidget/SingleDesignerWidget.component";
import { Searchbar } from "../Search/Search.component";

export const DesignerNav = () => {
  return (
    <DesignersWrapper>
      <Searchbar />
      <SingleDesignerWidget />
    </DesignersWrapper>
  );
};
