import { Button } from "@mui/material";
import * as React from "react";
import CountButton from "../components/CountButton";
import CountView from "../components/CountView";
import { Tehcnologies } from "../components/Technologies";

export interface IAppProps {}

export function Home(props: IAppProps) {
  return (
    <div>
      <p className="text-5xl font-bold mt-0 mb-6 ml-10">Home</p>
      <Tehcnologies />
    </div>
  );
}
