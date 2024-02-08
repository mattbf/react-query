import Link from "next/link";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "@/helpers/relativeDate";
import useUserData from "@/hooks/useUserData";
import { Label } from "./Label";

export function IssueItem({ title, number, assignee, commentCount, createdBy, createdDate, labels, status }) {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);
  return (
    <li>
      <div>{status === "done" || status === "cancelled" ? <GoIssueClosed /> : <GoIssueOpened />}</div>
      <div className="issue-content">
        <span>
          <Link href={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <Label key={label} label={label} />
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} {createdByUser.isSuccess ? `by ${createdByUser.data.name}` : ""}
        </small>
      </div>
      {assignee ? (
        <img
          src={assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""}
          className="assigned-to"
          alt={`Assigned to ${assigneeUser.isSuccess ? assigneeUser.data.name : "avatar"}`}
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
