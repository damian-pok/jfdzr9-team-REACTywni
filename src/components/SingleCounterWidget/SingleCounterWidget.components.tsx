import {
  CounterWidgetArea,
  SingleCounterWidgetField,
  ContentArea,
  NumberStyles,
  ImageIcon,
  ParagraphStyle,
} from "./../SingleCounterWidget/SingleCounterWidget.styled";
//import icons
import freelancerIcon from "./../../assets/icons/freelancer-icon.svg";
import clientIcon from "./../../assets/icons/client-icon.svg";
import completedOrdersIcon from "./../../assets/icons/completed-orders-icon.svg";
import ordersIcon from "./../../assets/icons/orders-icon.svg";

const SingleCounterWidget = () => {
  return (
    <>
      <CounterWidgetArea>
        <SingleCounterWidgetField>
          <ImageIcon src={freelancerIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>234</NumberStyles>
            <ParagraphStyle>Liczba freelancerów</ParagraphStyle>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={clientIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>453</NumberStyles>
            <ParagraphStyle>Liczba zleceniodawców</ParagraphStyle>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={completedOrdersIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>5432</NumberStyles>
            <ParagraphStyle>Liczba wystawionych zleceń</ParagraphStyle>
          </ContentArea>
        </SingleCounterWidgetField>
        <SingleCounterWidgetField>
          <ImageIcon src={ordersIcon} alt="Ikonka licznika" />
          <ContentArea>
            <NumberStyles>3456</NumberStyles>
            <ParagraphStyle>Liczba zakończonych zleceń</ParagraphStyle>
          </ContentArea>
        </SingleCounterWidgetField>
      </CounterWidgetArea>
    </>
  );
};
export default SingleCounterWidget;
