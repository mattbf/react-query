"use client";
import { useSearchParams } from "next/navigation";

export default function IssueDetails() {
  const { number } = useSearchParams();

  return <h1>Issue {number}</h1>;
}
