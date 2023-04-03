import { DesignerWidget, DesignerPhoto, DesignerTags, DesignerContent, TagButton } from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";

export const SingleDesignerWidget = () => {
  return (
    <DesignerWidget>
      <DesignerPhoto src={designer} />
      <DesignerTags>
        <TagButton>branding</TagButton>
        <TagButton>UX/UI</TagButton>
        <TagButton>inne</TagButton>
      </DesignerTags>
      <DesignerContent>
        <h3>Anna Karenina</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a incidunt id ab, sint porro nihil quaerat ex
        nulla totam voluptas laudantium fuga atque iste ad ducimus minima! Incidunt, quis.
      </DesignerContent>
    </DesignerWidget>
  );
};
