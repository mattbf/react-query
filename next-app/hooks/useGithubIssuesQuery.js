export default function useGithubIssuesQuery({ owner, repo, filters }) {
  function getIssues() {
    const filterQuery = new URLSearchParams();

    if (filters.assignee) {
      filterQuery.append("assignee", filters.assignee);
    }

    if (filters.labels && filters.labels.length > 0) {
      filterQuery.append("labels", filters.labels.join(","));
    }

    if (filters.state) {
      filterQuery.append("state", filters.state);
    }

    const filterQueryString = filterQuery.toString();

    return fetch(`https://api.github.com/repos/${owner}/${repo}/issues${filterQueryString ? `?${filterQueryString}` : ""}`).then((res) => res.json());
  }

  return useQuery(["issues", owner, repo, filters], getIssues);
}
