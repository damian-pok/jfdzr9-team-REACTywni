import {
  CounterWidgetArea,
  SingleCounterWidgetField,
  ContentArea,
  NumberStyles,
} from "./../SingleCounterWidget/SingleCounterWidget.styled";

const SingleCounterWidget = () => {
  return (
    <>
      <CounterWidgetArea>
        <SingleCounterWidgetField>
          <img src="./../../../public/deflaut-image-counter.png" alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>234</NumberStyles>
            <p>Liczba freelancerów</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <img src="./../../../public/deflaut-image-counter.png" alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>453</NumberStyles>
            <p>Liczba zleceniodawców</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <img src="./../../../public/deflaut-image-counter.png" alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>5432</NumberStyles>
            <p>Liczba wystawionych zleceń</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <img src="./../../../public/deflaut-image-counter.png" alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>3456</NumberStyles>
            <p>Liczba freelancerów</p>
          </ContentArea>
        </SingleCounterWidgetField>
      </CounterWidgetArea>
    </>
  );
};
export default SingleCounterWidget;
