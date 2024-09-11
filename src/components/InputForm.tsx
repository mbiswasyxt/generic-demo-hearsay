import { useState } from "react";

type InputFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputForm = ({ setOpen }: InputFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const phoneNumber = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const city = formData.get("city") as string;
    const region = formData.get("region") as string;
    const postalCode = formData.get("postal-code") as string;
    const leadRequestBody = {
      contact: {
        sourceid: "654",
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber,
        email: email,
      },
      user: {
        firstname: "Rachel",
        lastname: "Williams",
        nickname: "Rachel Williams",
        email: email,
        phonenumber: "4025885306",
        sourceid: "ActionsTest",
      },
      messagecontext: {
        templateid: "T16",
      },
      company: "Taurus",
      leadsource: "action-flow-source 01",
    };

    const clientRequestBody = {
      contact: {
        sourceid: "654",
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber,
      },
      user: {
        firstname: "Rachel",
        lastname: "Williams",
        nickname: "Rachel Williams",
        email: email,
        phonenumber: "4025885306",
        sourceid: "ActionsTest",
      },
      messagecontext: {
        templateid: "T16",
      },
      policydata: {
        policyid: Date.now().toString(),
      },
      company: "Taurus",
      clientsource: "action-flow-source 01",
    };

    try {
      const response = fetch(
        `/api/createLeadAndContact?leadBody=${JSON.stringify(leadRequestBody)}&clientBody=${JSON.stringify(clientRequestBody)}`
      )
        .then((res) => {
          res.json();
        })
        .catch((err) => console.log(JSON.stringify(err)));

      setIsSubmitting(false);
      setOpen(false);
    } catch (error) {
      console.log(JSON.stringify(error));
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting ? (
        <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-white border-indigo-600"></div>
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
                <div className="sm:col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default InputForm;
