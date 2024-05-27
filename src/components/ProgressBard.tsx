import { Card, ProgressBar } from "@tremor/react";
import React from "react";

export const ProgressBard = () => {
  return (
    <div className="space-y-3">
      
      <p className="text-center font-mono text-sm text-slate-500">
        
        ProgressBar with color fuchsia
      </p>
      <Card className="mx-auto max-w-sm  bg-tremor-background dark:bg-tremor-background-emphasis">
        
        <div className="flex justify-between">
          
          <p className="flex items-center space-x-1">
            
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              $9,000
            </span>
            <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              (45%)
            </span>
          </p>
          <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Goal: 20,000
          </span>
        </div>
        <ProgressBar value={45} className="mt-2" color="fuchsia" />
      </Card>
    </div>
  );
};
