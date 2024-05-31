import { RiAddLine, RiPlug2Line } from "@remixicon/react";
import { Button, Dialog, DialogPanel, Icon } from "@tremor/react";
import React from "react";
import useModal from "../hooks/useModal";

interface Props {
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  name: string;
}

export const ModalBase = ({ children, name }: Props) => {
  const { handleToggleModal, modals } = useModal();
  const isModalOpen = Boolean(modals[name]);
  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <Icon
          icon={RiAddLine}
          onClick={() => handleToggleModal(name)}
          className="text-tremor-default font-medium 
            bg-blue-600
         shadow-tremor-input 
         w-12 h-12 text-white rounded-full
        "
        ></Icon>
      </div>
      <div className="flex justify-center">
        <Dialog
          open={isModalOpen}
          onClose={() => handleToggleModal(name)}
          static={true}
          className="z-[100]"
        >
          <DialogPanel className="max-w-sm">{children}</DialogPanel>
        </Dialog>
      </div>
    </>
  );
};
