import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import InputForm from "./InputForm";

type ModalPageProps = {
  isOpen?: boolean;
  name: string;
  otherDetails: any;
};

const ModalPage = ({ isOpen = false, name, otherDetails }: ModalPageProps) => {
  const [open, setOpen] = useState(isOpen);
  // useEffect(() => {
  //   console.log(open);
  // }, [open]);
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <InputForm
              setOpen={setOpen}
              name={name}
              otherDetails={otherDetails}
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalPage;
