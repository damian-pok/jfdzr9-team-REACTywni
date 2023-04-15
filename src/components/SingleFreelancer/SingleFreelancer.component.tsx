import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import {
  DesignerContent,
  DesignerPhoto,
  DesignerTags,
  DesignerTagsSecond,
  DesignerWidget,
  Tag,
  TagSecond,
  TagsWrapper,
} from "../SingleDesignerWidget/SingleDesignerWidget.styled";
import example from "../../assets/example.jpg";

interface IFreelacerData {
  freelancerData: IProfileInputFreelancer;
}

export const SingleFreelancer = ({ freelancerData }: IFreelacerData) => {
  return (
    <>
      <DesignerWidget>
        <DesignerPhoto src={example} />

        <DesignerContent>
          <h3>
            {freelancerData.firstName} {freelancerData.secondName}{" "}
          </h3>
          <p> {freelancerData.aboutMe}</p>
        </DesignerContent>

        <TagsWrapper>
          <DesignerTags>
            {freelancerData.branding ? <Tag>Branding</Tag> : null}
            {freelancerData.print ? <Tag>Druk</Tag> : null}
            {freelancerData.digital ? <Tag>Digital</Tag> : null}
            {freelancerData.ux ? <Tag>UX/UI</Tag> : null}
            {freelancerData.ilustrations ? <Tag>Ilustracje</Tag> : null}
            {freelancerData.other ? <Tag>Inne</Tag> : null}
          </DesignerTags>

          <DesignerTagsSecond>
            <TagSecond>ulotki</TagSecond>
            <TagSecond>plakaty</TagSecond>
            <TagSecond>photoshop</TagSecond>
            <TagSecond>figma</TagSecond>
          </DesignerTagsSecond>
        </TagsWrapper>
      </DesignerWidget>
    </>
  );
};
