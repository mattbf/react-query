"use client";
import { useQuery } from "@tanstack/react-query";
import { IssueItem } from "@/components/IssueItem";

export default function IssuesList() {
  const issuesQuery = useQuery({ queryKey: ["issues"], queryFn: () => fetch("/api/issues").then((res) => res.json()) });
  return (
    <div>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading....</p>
      ) : !!issuesQuery.data && issuesQuery.isSuccess ? (
        <ul className="issues-list">
          {issuesQuery.data.map((item) => (
            <IssueItem
              key={item.id}
              title={item.title}
              number={item.number}
              assignee={item?.assignee?.id}
              commentCount={item.commentCount}
              createdBy={item?.createdBy?.id}
              {...item}
            />
          ))}
        </ul>
      ) : (
        "No issues"
      )}
    </div>
  );
}
