import useLabelsData from "@/hooks/useLabelsData";

export default function LabelList({ selected, toggle }) {
  const labelsData = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsData.isLoading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {labelsData?.data?.map((label) => (
            <li key={label.id}>
              <button onClick={() => toggle(label.id)} className={`label ${selected.includes(label.id) ? "selected" : ""} ${label.color}`}>
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
