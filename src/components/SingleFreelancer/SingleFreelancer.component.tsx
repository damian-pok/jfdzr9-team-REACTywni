import { IJob, IProfileInputFreelancer } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import {
  DesignerContent,
  DesignerPhoto,
  DesignerTags,
  DesignerTagsSecond,
  DesignerWidget,
  Tag,
  TagsWrapper,
} from "../SingleFreelancer/SingleFreelancer.styled";
import example from "../../assets/example.jpg";
import { DesignerServices } from "../DesignerServices/DesignerServices.component";
import { useState } from "react";
import { ProfileInputFreelancerStyled } from "../ProfileInputFreelancer/ProfileInputFreelancer.styled";
import { Controller, useForm } from "react-hook-form";

import { db } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
export interface IFreelacerData {
  freelancerData: IProfileInputFreelancer;
}

export const SingleFreelancer = ({ freelancerData }: IFreelacerData) => {
  const [showBooking, setShowBooking] = useState(false);
  const { control, handleSubmit } = useForm<IJob>();

  const handleBooking = () => {
    setShowBooking(true);
  };

  const onSubmit = handleSubmit((data) => {
    const jobsData = freelancerData.jobs;
    console.log("Updated jobs: ", jobsData.push(data));
    const docRef = doc(db, "freelancer", freelancerData.uid);
    updateDoc(docRef, { jobs: jobsData });
  });

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
            {freelancerData.tags && <DesignerServices services={freelancerData.tags}></DesignerServices>}
          </DesignerTagsSecond>
          <button onClick={handleBooking}>Kliknij aby zapytać</button>
          {showBooking && (
            <>
              <ProfileInputFreelancerStyled onSubmit={onSubmit}>
                <Controller
                  name="author"
                  control={control}
                  render={({ field }) => <input placeholder="Nazwa firmy" type={"text"} {...field} />}
                />
                <Controller
                  name="content"
                  control={control}
                  render={({ field }) => <input placeholder="Zamówienie" type={"text"} {...field} />}
                />
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => <input placeholder="Do kiedy?" type={"text"} {...field} />}
                />
                <Controller name="status" control={control} defaultValue="0" render={() => <p>Waiting...</p>} />
                <button type="submit">Zarezerwuj</button>
              </ProfileInputFreelancerStyled>
            </>
          )}
        </TagsWrapper>
      </DesignerWidget>
    </>
  );
};
