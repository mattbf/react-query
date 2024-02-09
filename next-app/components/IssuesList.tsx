"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IssueItem } from "@/components/IssueItem";
import customFetch from "@/helpers/customFetch";

export default function IssuesList({ labels, status }: { labels: string[]; status: string }) {
  const queryClient = useQueryClient();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["issues", { labels, status }],
    queryFn: async ({ signal }) => {
      const labelsString = labels.map((l) => `labels[]=${l}`).join("&");
      const statusString = status ? `status=${status}` : "";
      const results = customFetch(`/api/issues?${labelsString}${statusString}`, { signal });
      //starts prefilling issues
      // results.forEach((issue) => {
      //   queryClient.setQueryData(["issues", issue.number.toString()], issue);
      // });

      return results;
    },
  });

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        <p>Loading....</p>
      ) : isError ? (
        <p>Error</p>
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
