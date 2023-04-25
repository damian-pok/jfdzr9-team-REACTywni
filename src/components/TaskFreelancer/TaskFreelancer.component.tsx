import { IJob } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import { JobTask } from "./TaskFreelancer.styled";

export const TaskFreelancer = ({ author, date, content, status }: Omit<IJob, "id">) => {
  return (
    <>
      <JobTask>
        Zadanie od {author}, o treści: {content}, termin wykonania: {date},
        {status === "0" ? <span> Czeka na decyzje</span> : null}
        {status === "1" ? <span> Zaakceptowano</span> : null}
        {status === "2" ? <span> Odrzucono</span> : null}
      </JobTask>
    </>
  );
};
