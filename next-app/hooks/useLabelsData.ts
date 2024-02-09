import { useQuery } from "@tanstack/react-query";

const useLabelsData = () => {
  const labelsData = useQuery({ queryKey: ["labels"], queryFn: () => fetch("api/labels").then((res) => res.json()) });

  return labelsData;
};

export default useLabelsData;
