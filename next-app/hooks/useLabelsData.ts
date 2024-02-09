import { useQuery } from "@tanstack/react-query";
import { defaultLabels } from "@/helpers/defaultData";

const useLabelsData = () => {
  const labelsData = useQuery({
    queryKey: ["labels"],
    queryFn: () => fetch("api/labels").then((res) => res.json()),
    staleTime: 1000 * 60 * 60,
    placeholderData: defaultLabels,
  });

  return labelsData;
};

export default useLabelsData;
