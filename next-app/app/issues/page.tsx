"use client";
import IssuesList from "@/components/IssuesList";
import LabelList from "@/components/LabelList";
import { useState } from "react";

const Issues = () => {
  const [labels, setLabels] = useState<string[]>([]);

  const handleSelectLabel = (label: string) => {
    setLabels((currentLabels) => {
      if (currentLabels.includes(label)) {
        return currentLabels.filter((l) => l !== label);
      } else {
        return currentLabels.concat(label);
      }
    });
  };

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} />
        </section>
        <aside>
          <LabelList selected={labels} toggle={(label) => handleSelectLabel(label)} />
        </aside>
      </main>
    </div>
  );
};

export default Issues;
