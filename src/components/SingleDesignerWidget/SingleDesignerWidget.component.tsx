import { DesignerWidget, DesignerPhoto, DesignerTags, DesignerContent, Tag } from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";

export const SingleDesignerWidget = () => {
  return (
    <DesignerWidget>
      <DesignerPhoto src={designer} />
      <DesignerContent>
        <h3>Anna Karenina</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a incidunt id ab, sint porro nihil quaerat ex
        nulla totam voluptas laudantium fuga atque iste ad ducimus minima! Incidunt, quis.
      </DesignerContent>
      <DesignerTags>
        <Tag>branding</Tag>
        <Tag>UX/UI</Tag>
        <Tag>digital</Tag>
        <Tag>druk</Tag>
        <Tag>inne</Tag>
      </DesignerTags>
    </DesignerWidget>
  );
};
