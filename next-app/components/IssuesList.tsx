"use client";
import { useQuery } from "@tanstack/react-query";
import { IssueItem } from "@/components/IssueItem";

export default function IssuesList({ labels, status }: { labels: string[]; status: string }) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["issues", { labels, status }],
    queryFn: () => {
      const labelsString = labels.map((l) => `labels[]=${l}`).join("&");
      const statusString = status ? `status=${status}` : "";
      fetch(`/api/issues?${labelsString}${statusString}`).then((res) => res.json());
    },
  });

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        <p>Loading....</p>
      ) : !!data ? (
        <ul className="issues-list">
          {data?.map((item) => (
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
