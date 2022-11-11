import * as React from "react";
import CountButton from "../components/CountButton";
import CountView from "../components/CountView";

export interface IAppProps {}

export function StateDemo(props: IAppProps) {
  return (
    <div>
      <p className="text-5xl font-bold mt-0 mb-6 ml-10">State Demo</p>
      <CountButton />
      <CountView />
    </div>
  );
}
