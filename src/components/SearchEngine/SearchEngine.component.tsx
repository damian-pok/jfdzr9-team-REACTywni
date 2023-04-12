import {
  SearchEngineWrapper,
  SearchField,
  SearchLabel,
  CategoryLabel,
  CheckboxList,
  CheckboxLabel,
  Input,
} from "./SearchEngine.styled";

export const SearchEngine = () => {
  return (
    <SearchEngineWrapper>
      <SearchLabel>Wpisz czego potrzebujesz</SearchLabel>
      <SearchField placeholder="ulotka, plakat, broszura..." />
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
