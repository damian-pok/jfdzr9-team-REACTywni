import {
  DesignerWidget,
  DesignerPhoto,
  DesignerTags,
  DesignerContent,
  Tag,
  DesignerTagsSecond,
  TagSecond,
  TagsWrapper,
} from "./SingleDesignerWidget.styled";
import designer from "../../../public/designer.jpg";
import designer3 from "../../../public/designer3.jpg";

import { IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";

interface SingleFreelancer {
  freelancer: IProfileInputFreelancer;
}

export const SingleDesignerWidget = ({ freelancer }: SingleFreelancer) => {
  const {
    uid,
    firstName,
    secondName,
    email,
    country,
    city,
    experience,
    aboutMe,
    services,
    gallery,
    branding,
    print,
    digital,
    ux,
    ilustrations,
    other,
  } = freelancer;

  console.log("SingleDesignerWidget ", freelancer);
  return <p>JESTEM TU!</p>;
};

//  <>
//       <p>Sprawdzam</p>
//       <DesignerWidget>
//         <DesignerPhoto src={designer} />
//         <DesignerContent>
//           <h3>
//             {firstName} {secondName}
//           </h3>
//           <p> {aboutMe}</p>
//         </DesignerContent>
//         <TagsWrapper>
//           <DesignerTags>
//             <Tag>branding</Tag>
//             <Tag>UX/UI</Tag>
//           </DesignerTags>
//           <DesignerTagsSecond>
//             <TagSecond>ulotki</TagSecond>
//             <TagSecond>plakaty</TagSecond>
//             <TagSecond>photoshop</TagSecond>
//             <TagSecond>figma</TagSecond>
//           </DesignerTagsSecond>
//         </TagsWrapper>
//       </DesignerWidget>
//     </>
