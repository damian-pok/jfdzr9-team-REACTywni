import { DesignerWidget, DesignerPhoto, DesignerTags, DesignerContent, Tag } from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";
import designer3 from "../../../public/designer3.jpg";

export const SingleDesignerWidget = () => {
  return (
    <>
      <DesignerWidget>
        <DesignerPhoto src={designer} />
        <DesignerContent>
          <h3>Julia Popławska</h3>
          Cześć, jestem Julka! Projektowanie graficzne to moja pasja i sposób na wyrażanie siebie. W zawodzie grafika
          pracuję już od kilku lat, moją specjalnością jest projektowanie identyfikacji wizualnej oraz interfejsów
          użytkownika.
        </DesignerContent>
        <DesignerTags>
          <Tag>branding</Tag>
          <Tag>UX/UI</Tag>
        </DesignerTags>
      </DesignerWidget>

      <DesignerWidget>
        <DesignerPhoto src={designer3} />
        <DesignerContent>
          <h3>Klaudiusz Wyrzykowski</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi similique voluptatibus recusandae. Tempore hic
          quasi eos pariatur id numquam officiis vel dolores culpa. Odit quo vitae ipsam dolorum ipsa eius!
        </DesignerContent>
        <DesignerTags>
          <Tag>UX/UI</Tag>
          <Tag>druk</Tag>
          <Tag>inne</Tag>
        </DesignerTags>
      </DesignerWidget>
    </>
  );
};
