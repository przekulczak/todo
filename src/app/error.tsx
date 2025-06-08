"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center p-4"
    >
      <h2 className="mb-4 text-2xl font-bold">Something went wrong:</h2>
      <pre className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">
        {error.message}
      </pre>
      <button
        onClick={reset}
        className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
