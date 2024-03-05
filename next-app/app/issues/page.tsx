"use client";
import IssuesList from "@/components/IssuesList";
import LabelList from "@/components/LabelList";
import { useState } from "react";
import { StatusSelect } from "@/components/StatusSelect";

const TEST_VARIABLE = process.env.NEXT_PUBLIC_TEST_VARIABLE;

const Issues = () => {
  const [labels, setLabels] = useState<string[]>([]);

  const [status, setStatus] = useState<string>("");

  const handleSelectLabel = (label: string) => {
    setLabels((currentLabels) => {
      if (currentLabels.includes(label)) {
        return currentLabels.filter((l) => l !== label);
      } else {
        return currentLabels.concat(label);
      }
    });
  };

  console.log({TEST_VARIABLE})

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList selected={labels} toggle={(label) => handleSelectLabel(label)} />
        </aside>
        <h3>Status</h3>
        <StatusSelect value={status} onChange={(e) => setStatus(e.target.value)} />
      </main>
    </div>
  );
};

export default Issues;
