import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList() {
  const issuesQuery = useQuery(["issues"], () => fetch("/api/issues").then((res) => res.json()));
  return (
    <div>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {issuesQuery.data.map((item, i) => (
            <IssueItem
              // key={item.id}
              // title={item.title}
              // number={item.number}
              // assignee={item.assignee}
              // commentCount={item.commentCount}
              // createdBy={item.createdBy}
              {...item}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
