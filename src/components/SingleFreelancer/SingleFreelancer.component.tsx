import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import {
  DesignerContent,
  DesignerPhoto,
  DesignerTags,
  DesignerTagsSecond,
  DesignerWidget,
  Tag,
  TagsWrapper,
} from "../SingleFreelancer/SingleFreelancer.styled";
import ProfileAvatar from "../../assets/illustrations/Profile-avatar.svg";
import { DesignerServices } from "../DesignerServices/DesignerServices.component";

interface IFreelacerData {
  freelancerData: IProfileInputFreelancer;
}

export const SingleFreelancer = ({ freelancerData }: IFreelacerData) => {
  return (
    <>
      <DesignerWidget>
        <DesignerPhoto src={ProfileAvatar} />

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
            {freelancerData.tags && <DesignerServices services={freelancerData.tags}></DesignerServices>}
          </DesignerTagsSecond>
        </TagsWrapper>
      </DesignerWidget>
    </>
  );
};
