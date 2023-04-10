import { SearchEngineWrapper, SearchField, SearchLabel, CategoryList } from "./SearchEngine.styled";

export const SearchEngine = () => {
  return (
    <SearchEngineWrapper>
      <SearchLabel>Wpisz czego potrzebujesz</SearchLabel>
      <SearchField placeholder="ulotka, plakat, broszura..." />
      <CategoryList>Wybierz kategorię</CategoryList>
    </SearchEngineWrapper>
  );
};
