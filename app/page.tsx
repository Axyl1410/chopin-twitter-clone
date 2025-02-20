import { Suspense } from "react";
import TweetsPage from "./tweets";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-3xl font-bold">Simple Twitter Clone</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TweetsPage />
      </Suspense>
    </div>
  );
}
