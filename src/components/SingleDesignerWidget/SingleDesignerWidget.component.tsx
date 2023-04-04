import {
  DesignerWidget,
  DesignerPhoto,
  DesignerTags,
  DesignerContent,
  Tag,
  PhotoContainer,
} from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";

export const SingleDesignerWidget = () => {
  return (
    <DesignerWidget>
      <PhotoContainer>
        <DesignerPhoto src={designer} />
        <DesignerTags>
          <Tag>branding</Tag>
          <Tag>UX/UI</Tag>
          <Tag>inne</Tag>
        </DesignerTags>
      </PhotoContainer>
      <DesignerContent>
        <h3>Anna Karenina</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a incidunt id ab, sint porro nihil quaerat ex
        nulla totam voluptas laudantium fuga atque iste ad ducimus minima! Incidunt, quis.
      </DesignerContent>
    </DesignerWidget>
  );
};
