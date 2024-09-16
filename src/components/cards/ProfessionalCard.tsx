import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Image } from "@yext/pages-components";
import { CardProps } from "@yext/search-ui-react";
import { CiFacebook, CiGlobe, CiLinkedin } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { FormatPhoneNumber } from "../../common/util";
import Cta from "../cta";
import ModalPage from "../ModalPage";
import { useState } from "react";

const ProfessionalCard = (props: CardProps<any>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { result } = props;
  const { name } = result;
  const {
    address,
    headshot,
    mainPhone,
    certifications,
    fins_jobTitle,
    languages,
    yearsOfExperience,
    c_serviceAreasProfessionals,
    c_clientFocuses,
    description,
    c_linkedTeam,
    slug,
    emails,
  } = result.rawData;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article
      className="flex flex-col border shadow-md p-4"
      role="region"
      aria-label={`Professional details of ${name}`}
    >
      <header className="flex flex-col md:flex-row md:gap-8">
        <section className="w-2/5 flex flex-col md:flex-row gap-2">
          <Image
            image={headshot}
            className="aspect-square w-full h-full md:!w-60 md:!h-60 max-w-none"
          />
          <section className="flex flex-col my-auto gap-2 ml-8">
            <h2 className="text-primary text-xl font-light">{name}</h2>
            <p className="italic text-sm text-slate-500">{fins_jobTitle}</p>
            <p className="italic text-sm text-slate-500">
              Experience: {yearsOfExperience} Years
            </p>
            <section className="flex flex-col gap-2 md:gap-8 md:hidden ">
              <address className="text-slate-500 font-normal not-italic">
                <p>{address.line1}</p>
                {address.line2 && <p>{address.line2}</p>}
                <p>
                  {address.city}, {address.region} {address.postalCode}
                </p>
              </address>
              <section className="flex flex-col gap-2 font-normal text-slate-500">
                <div className="flex gap-1 text-sm">
                  <span className="font-bold">Direct: </span>
                  <FormatPhoneNumber mainPhone={mainPhone} />
                </div>
                <div className="flex gap-1 text-sm">
                  <span className="font-bold">Branch: </span>
                  <FormatPhoneNumber
                    mainPhone={
                      c_linkedTeam
                        ? c_linkedTeam[0].mainPhone
                        : c_serviceAreasProfessionals[0].mainPhone
                    }
                  />
                </div>
              </section>
            </section>

            <nav className=" flex flex-col gap-4 justify-center md:justify-start font-medium leading-loose items-center text-sm text-secondary">
              <button
                className="w-full md:w-fit text-center md:px-4 md:py-1 md:text-sm rounded-md px-2 py-1  bg-primaryCTA hover:bg-primaryCTA-hover text-white font-bold"
                onClick={handleOpenModal}
              >
                Book an appointment
              </button>
              {isModalOpen && (
                <ModalPage
                  name={name!}
                  email={emails[0] || 'contact%2B@hearsay.com'}
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              )}
              <Cta
                buttonText="View Profile"
                style="secondary"
                url={`/${slug}`}
                classNames="w-full md:w-fit text-center md:px-4 md:py-1 md:text-sm rounded-md px-2 py-1"
              />
            </nav>
          </section>
        </section>
        <section className="w-3/5 flex flex-col gap-8 pl-4 pb-4 md:border-l-2">
          <section className="md:flex gap-8 hidden ">
            <section className="w-1/2">
              <address className="text-slate-500 font-normal not-italic">
                <p>{address.line1}</p>
                {address.line2 && <p>{address.line2}</p>}
                <p>
                  {address.city}, {address.region} {address.postalCode}
                </p>
              </address>
              <section className="flex flex-col gap-2 font-normal">
                <p className="flex gap-1 text-sm">
                  <span className="font-bold">Direct: </span>
                  {mainPhone}
                </p>
                <p className="flex gap-1 text-sm">
                  <span className="font-bold">Branch: </span>
                  {c_linkedTeam
                    ? c_linkedTeam[0].mainPhone
                    : c_serviceAreasProfessionals[0].mainPhone}
                </p>
              </section>
            </section>
            <section className="hidden md:block">
              {languages && (
                <p>
                  <span className="font-medium">Languages: </span>
                  <span className="font-light">{languages.join(", ")}</span>
                </p>
              )}
              {certifications && (
                <p>
                  <span className="font-medium">Certifications: </span>
                  <span className="font-light">
                    {certifications.join(", ")}
                  </span>
                </p>
              )}
              {c_clientFocuses && (
                <p>
                  <span className="font-medium">Client Focuses: </span>
                  <span className="font-light">
                    {c_clientFocuses.join(", ")}
                  </span>
                </p>
              )}
            </section>
          </section>
          <footer className="flex flex-col gap-4">
            <nav
              className="md:flex gap-4 text-primary hidden"
              aria-label="Social Media Links"
            >
              <a href="#" aria-label="LinkedIn">
                <CiLinkedin
                  className="w-8 h-8 hover:cursor-pointer"
                  aria-hidden="true"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <CiFacebook
                  className="w-8 h-8 hover:cursor-pointer"
                  aria-hidden="true"
                />
              </a>
              <a href="mailto:someone@example.com" aria-label="Email">
                <FaRegEnvelope
                  className="w-8 h-8 hover:cursor-pointer"
                  aria-hidden="true"
                />
              </a>
              <a href="#" aria-label="Website">
                <CiGlobe
                  className="w-8 h-8 hover:cursor-pointer"
                  aria-hidden="true"
                />
              </a>
            </nav>
            <p className="text-xs text-slate-500 italic hidden md:block">
              {name} is registered to do business in{" "}
              {c_serviceAreasProfessionals
                .map((entry: any) => entry.address.region)
                .join(", ")}
            </p>
          </footer>
        </section>
      </header>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className="md:flex w-fit px-4 py-2 items-center rounded-lg hidden"
              aria-expanded={open}
              aria-controls="about-me"
            >
              <h3 className="text-lg">About me</h3>
              <ChevronDownIcon
                className={`${open ? "rotate-180 transform" : ""} h-6 w-6 text-primary`}
                aria-hidden="true"
              />
            </DisclosureButton>
            <DisclosurePanel
              id="about-me"
              className="px-4 pb-2 text-sm text-gray-500"
            >
              {description}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </article>
  );
};

export default ProfessionalCard;
