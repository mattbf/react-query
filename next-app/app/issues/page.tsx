import IssuesList from "@/components/IssuesList";
import LabelList from "@/components/LabelList";

const Issues = () => {
  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList />
        </section>
        <aside>
          <LabelList />
        </aside>
      </main>
    </div>
  );
};

export default Issues;
