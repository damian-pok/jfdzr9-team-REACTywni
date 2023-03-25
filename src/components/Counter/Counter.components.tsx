import { CounterField } from "./Counter.styled";
import SingleCounterWidget from "./../SingleCounterWidget/SingleCounterWidget.components";

const Counter = () => {
  return (
    <CounterField>
      <h2>The numbers speak for themselves</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliquat enim ad minim.
      </p>
      <SingleCounterWidget />
    </CounterField>
  );
};
export default Counter;
