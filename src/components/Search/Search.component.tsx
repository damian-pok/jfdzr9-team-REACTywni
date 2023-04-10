import { SearchWrapper, SearchField, SearchLabel } from "./Search.styled";

export const Searchbar = () => {
  return (
    <SearchWrapper>
      <SearchLabel>Wpisz czego potrzebujesz</SearchLabel>
      <SearchField placeholder="ulotka, plakat, broszura..." />
    </SearchWrapper>
  );
};
