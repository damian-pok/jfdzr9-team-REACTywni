import { SearchWrapper, SearchField, SearchLabel, SearchButton } from "./Searchbar.styled";
import { RiUserSearchLine } from "react-icons/ri";
export const Searchbar = () => {
  return (
    <SearchWrapper>
      <SearchLabel>Znajdź designera</SearchLabel>
      <SearchField placeholder="Wpisz jaki typ projektu Cię interesuje" />
      <SearchButton>
        <RiUserSearchLine />
      </SearchButton>
    </SearchWrapper>
  );
};
