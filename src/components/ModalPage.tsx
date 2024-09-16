import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

type ModalPageProps = {
  isOpen?: boolean;
  name: string;
  onClose: () => void;
  email: string;
};

const ModalPage = ({
  isOpen = false,
  name,
  onClose,
  email = "test@hearsay.com",
}: ModalPageProps) => {
  const [open, setOpen] = useState(isOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const isDynamic: boolean =
    (import.meta.env.YEXT_PUBLIC_HEARSAY_DATA_IS_DYNAMIC ?? "false") === "true";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const clientRequestBody = {
      contact: {
        sourceid: Date.now().toString(),
        firstname: formData.get("first-name") as string,
        lastname: formData.get("last-name") as string,
        phonenumber: formData.get("phone") as string,
        email: formData.get("email") as string,
      },
      user: {
        firstname: isDynamic ? name.split(" ")[0] : "Rachel",
        lastname: isDynamic ? name.split(" ")[1] : "Williams",
        nickname: isDynamic ? name : "Rachel Williams",
        email: isDynamic ? email : "dstevens%2Brachelwilliams@hearsaycorp.com",
        phonenumber: "4025885306",
        sourceid: "ActionsTest",
      },
      messagecontext: { templateid: "T16" },
      company: "Taurus",
      clientSource: "action-flow-source 01",
      policydata: { policyid: Date.now().toString() },
    };

    try {
      const res = await fetch(
        `/api/createLeadAndContact?&clientBody=${JSON.stringify(clientRequestBody)}`
      );
      setSubmissionSuccess(true);
    } catch (error) {
      console.error(JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
            {isSubmitting ? (
              <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-white border-indigo-600"></div>
            ) : submissionSuccess ? (
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Your submission was successful. We appreciate the details you
                  have provided.
                </p>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 ">
                      <InputField
                        id="first-name"
                        label="First name"
                        type="text"
                      />
                      <InputField
                        id="last-name"
                        label="Last name"
                        type="text"
                      />
                      <InputField id="phone" label="Phone number" type="tel" />
                      <InputField
                        id="email"
                        label="Email address"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

const InputField = ({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type: string;
}) => (
  <div className="sm:col-span-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label} {<span className="text-red-600">*</span>}
    </label>
    <div className="mt-2">
      <input
        required
        id={id}
        name={id}
        type={type}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
);

export default ModalPage;
