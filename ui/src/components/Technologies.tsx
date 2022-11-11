import * as React from "react";

export interface IAppProps {}

export function Tehcnologies(props: IAppProps) {
  return (
    <div className="ml-10">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Libraries used:
      </h2>
      <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        <li>React</li>
        <li>Vite</li>
        <li>Tailwind CSS</li>
        <li>Wouter</li>
        <li>Zustand</li>
        <li>React Query</li>
      </ul>
    </div>
  );
}
