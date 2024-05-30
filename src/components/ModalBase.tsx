import { RiAddLine, RiPlug2Line } from "@remixicon/react";
import { Button, Dialog, DialogPanel, Icon } from "@tremor/react";
import React from "react";

interface Props {
    children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const ModalBase = ({children}:Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <Icon
          icon={RiAddLine}
          onClick={() => setIsOpen(true)}
          className="text-tremor-default font-medium 
            bg-blue-600
         shadow-tremor-input 
         w-12 h-12 text-white rounded-full
        "
        ></Icon>
      </div>
      <div className="flex justify-center">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          static={true}
          className="z-[100]"
        >
          <DialogPanel className="max-w-sm">
            {children}
          </DialogPanel>
        </Dialog>
      </div>
    </>
  );
};
