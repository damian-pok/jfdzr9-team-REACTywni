import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { SearchBarForm, SearchInput } from "./SearchBar.styled";

interface SearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  return (
    <SearchBarForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <SearchInput
        role="search"
        placeholder="Szukaj po tagach..."
        value={query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setQuery(event.target.value);
        }}
      />
    </SearchBarForm>
  );
};
