import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import {
  DesignerContent,
  DesignerPhoto,
  DesignerTags,
  DesignerTagsSecond,
  DesignerWidget,
  Tag,
  TagsWrapper,
} from "../SingleDesignerWidget/SingleDesignerWidget.styled";
import example from "../../assets/example.jpg";
import { DesignerServices } from "../DesignerServices/DesignerServices.component";

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
            {freelancerData.services && <DesignerServices services={freelancerData.services}></DesignerServices>}
          </DesignerTagsSecond>
        </TagsWrapper>
      </DesignerWidget>
    </>
  );
};
