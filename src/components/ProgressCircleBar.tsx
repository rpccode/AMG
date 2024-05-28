import { ProgressCircle } from "@tremor/react";
import React from "react";

export const ProgressCircleBar = () => {
  return (
    <>
      <ProgressCircle value={75} size="xl" color="fuchsia" >
        <span className="flex h-12 w-12 items-center justify-center rounded-full  text-sm font-medium text-fuchsia-500">
          $2,000
        </span>
      </ProgressCircle>
    </>
  );
};
