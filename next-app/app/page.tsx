import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 p-24">
      Hello world
      <div>
        <Link href={"/issues"} className="text-blue-600">
          Issues Tracker →
        </Link>
      </div>
    </main>
  );
}
