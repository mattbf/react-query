import useLabelsData from "@/hooks/useLabelsData";

export function Label({ label }) {
  const labelsData = useLabelsData();
  const labelObj = !!labelsData && labelsData?.data?.find((l) => l.id === label);
  if (!labelObj) return null;
  if (labelsData.isLoading) return null;
  return <span className={`label ${labelObj.color}`}>{labelObj?.name}</span>;
}
