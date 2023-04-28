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
  categories: Record<string, boolean>;
  setCategories: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export const SearchEngine = ({ query, setQuery, categories, setCategories }: SearchBarProps) => {
  return (
    <SearchEngineWrapper>
      <SearchLabel>Wpisz czego potrzebujesz</SearchLabel>
      <SearchBar query={query} setQuery={setQuery} />
      <CategoryLabel>Wybierz kategorię</CategoryLabel>
      <CheckboxList>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.branding}
            onChange={() => setCategories((previousState) => ({ ...previousState, branding: !previousState.branding }))}
          />
          branding
        </CheckboxLabel>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.digital}
            onChange={() => setCategories((previousState) => ({ ...previousState, digital: !previousState.digital }))}
          />
          digital
        </CheckboxLabel>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.print}
            onChange={() => setCategories((previousState) => ({ ...previousState, print: !previousState.print }))}
          />
          druk
        </CheckboxLabel>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.uxui}
            onChange={() => setCategories((previousState) => ({ ...previousState, uxui: !previousState.uxui }))}
          />
          UX/UI
        </CheckboxLabel>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.ilustrations}
            onChange={() =>
              setCategories((previousState) => ({ ...previousState, ilustrations: !previousState.ilustrations }))
            }
          />
          Ilustracje
        </CheckboxLabel>
        <CheckboxLabel>
          <Input
            type="checkbox"
            checked={categories.other}
            onChange={() => setCategories((previousState) => ({ ...previousState, other: !previousState.other }))}
          />
          inne
        </CheckboxLabel>
      </CheckboxList>
    </SearchEngineWrapper>
  );
};
