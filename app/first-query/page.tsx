import { useQuery } from "@tanstack/react-query";

const url = "https://ui.dev/api/courses/react-query/status";

const fetcher = () => {
  return fetch(url).then((res) => res.json());
};

const MyFirstQuery = () => {
  const myQuery = useQuery(["status"], () => fetcher);

  if (myQuery.status === "loading") return <p>Loading...</p>;
  const data = myQuery.data;
  return <div>{JSON.stringify(data)}</div>;
};

export default MyFirstQuery;
