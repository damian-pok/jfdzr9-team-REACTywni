import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { SearchBarForm, SearchInput } from "./SearchBar.styled";
import { PrimaryButton } from "../UI/Buttons/Buttons.styled";

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <SearchBarForm>
      <SearchInput
        role="search"
        placeholder="Szukaj po nazwie lub tagach..."
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);
        }}
      />
      <PrimaryButton>Szukaj</PrimaryButton>
    </SearchBarForm>
  );
};
