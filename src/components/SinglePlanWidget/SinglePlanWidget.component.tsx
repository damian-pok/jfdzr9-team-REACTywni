import { PlanWidgetArea } from "./SinglePlanWidget.styled";
import { SinglePlanWidgetField } from "./SinglePlanWidget.styled";
import { PlanContentArea } from "./SinglePlanWidget.styled";
import DeflautImageCounter from "./../../assets/deflaut-image-counter.png";

export const SinglePlanWidget = () => {
  return (
    <PlanWidgetArea>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis labore, blanditiis ut quae esse fugit
            inventore, cupiditate, maiores natus dolores non totam? Reprehenderit vel doloremque aut fugit, consectetur
            laborum!
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis labore, blanditiis ut quae esse fugit
            inventore, cupiditate, maiores natus dolores non totam? Reprehenderit vel doloremque aut fugit, consectetur
            laborum!
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis labore, blanditiis ut quae esse fugit
            inventore, cupiditate, maiores natus dolores non totam? Reprehenderit vel doloremque aut fugit, consectetur
            laborum!
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
      <SinglePlanWidgetField>
        <img src={DeflautImageCounter} alt="Ikonka licznika" />
        <PlanContentArea>
          <h3>Dla klienta</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis labore, blanditiis ut quae esse fugit
            inventore, cupiditate, maiores natus dolores non totam? Reprehenderit vel doloremque aut fugit, consectetur
            laborum!
          </p>
        </PlanContentArea>
      </SinglePlanWidgetField>
    </PlanWidgetArea>
  );
};

export default SinglePlanWidget;
