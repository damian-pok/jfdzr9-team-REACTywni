import {
  CounterWidgetArea,
  SingleCounterWidgetField,
  ContentArea,
  NumberStyles,
  ImageIcon,
} from "./../SingleCounterWidget/SingleCounterWidget.styled";
//import icons
import freelancerIcon from "./../../assets/illustrations/Freelancer-Icon.svg";
import clientIcon from "./../../assets/illustrations/client-icon.svg";
import completedOrdersIcon from "./../../assets/illustrations/completed-orders-icon.svg";
import ordersIcon from "./../../assets/illustrations/orders-icon.svg";

const SingleCounterWidget = () => {
  return (
    <>
      <CounterWidgetArea>
        <SingleCounterWidgetField>
          <ImageIcon src={freelancerIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>234</NumberStyles>
            <p>Liczba freelancerów</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={clientIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>453</NumberStyles>
            <p>Liczba zleceniodawców</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={completedOrdersIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>5432</NumberStyles>
            <p>Liczba wystawionych zleceń</p>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={ordersIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>3456</NumberStyles>
            <p>Liczba zakończonych zleceń</p>
          </ContentArea>
        </SingleCounterWidgetField>
      </CounterWidgetArea>
    </>
  );
};
export default SingleCounterWidget;
