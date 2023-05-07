import { IJob } from "../ProfileInputFreelancer/ProfileInputFreelancer.component";
import { JobTask, JobTaskContent } from "./TaskFreelancer.styled";

export const TaskFreelancer = ({ email, author, date, content, status }: Omit<IJob, "id">) => {
  return (
    <>
      <JobTask>
        <JobTaskContent>
          <strong>Zleceniodawca:</strong> {author}
        </JobTaskContent>
        <JobTaskContent>
          <strong>Zlecenie:</strong> {content}
        </JobTaskContent>
        <JobTaskContent>
          <strong>Termin:</strong> {date}
        </JobTaskContent>
        <JobTaskContent>
          <strong>Kontakt:</strong> {email}
        </JobTaskContent>
      </JobTask>
    </>
  );
};
