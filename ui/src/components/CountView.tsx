import * as React from "react";
import { useStore } from "../state/Store";

export default function CountView() {
  const count = useStore((state) => state.count);
  return (
    <div className="w-full">
      <p className="text-center">You have clicked: {count} times.</p>
    </div>
  );
}
