import { SearchWrapper } from "./Search.styled";
import { SearchEngine } from "../SearchEngine/SearchEngine.component";
import { DesignersNav } from "../DesignersNav/DesignersNav.component";

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchEngine />
      <DesignersNav />
    </SearchWrapper>
  );
};
