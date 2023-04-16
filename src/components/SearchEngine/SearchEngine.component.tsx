import { Dispatch, SetStateAction } from "react";
import {
  SearchEngineWrapper,
  SearchLabel,
  CategoryLabel,
  CheckboxList,
  CheckboxLabel,
  Input,
} from "./SearchEngine.styled";
import { SearchBar } from "../SearchBar/SearchBar.component";

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchEngine = ({ query, setQuery }: SearchBarProps) => {
  return (
    <SearchEngineWrapper>
      <SearchLabel>Wpisz czego potrzebujesz</SearchLabel>
      <SearchBar query={query} setQuery={setQuery} />
      <CategoryLabel>Wybierz kategorię</CategoryLabel>
      <CheckboxList>
        <CheckboxLabel>
          <Input type="checkbox" />
          branding
        </CheckboxLabel>
        <CheckboxLabel>
          <Input type="checkbox" />
          digital
        </CheckboxLabel>
        <CheckboxLabel>
          <Input type="checkbox" />
          druk
        </CheckboxLabel>
        <CheckboxLabel>
          <Input type="checkbox" />
          UX/UI
        </CheckboxLabel>
        <CheckboxLabel>
          <Input type="checkbox" />
          inne
        </CheckboxLabel>
      </CheckboxList>
    </SearchEngineWrapper>
  );
};
