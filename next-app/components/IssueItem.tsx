import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "@/helpers/relativeDate";
import Link from "next/link";
import useUserData from "@/hooks/useUserData";

export function IssueItem({ title, number, assignee, commentCount, createdBy, createdDate, labels, status }: any) {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);
  return (
    <li>
      {/* <div>{status === "done" || status === "cancelled" ? <GoIssueClosed /> : <GoIssueOpened />}</div> */}
      <div className="issue-content">
        <span>
          <Link href={`/issue/${number}`}>{title}</Link>
          {/* {labels.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))} */}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}
          {`by ${createdByUser?.data?.name}`}
        </small>
      </div>
      {/* {assignee ? <div>{assignee}</div> : null} */}
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
