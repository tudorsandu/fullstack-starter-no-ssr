import * as React from "react";
import { useStore } from "../state/Store";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const increaseCount = useStore((state) => state.increaseCount);
  const clearCount = useStore((state) => state.clearCount);
  return (
    <div className="grid justify-center">
      <div>
        <button
          onClick={increaseCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 w-32"
        >
          Click Me
        </button>
        <button
          onClick={clearCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
