import { Link } from "@yext/pages-components";

interface CtaProps {
  buttonText: string;
  style: "primary" | "secondary";
  url: string;
  classNames?: string;
  type?: string;
}

const Cta = ({ buttonText, style, url, classNames = "", type }: CtaProps) => {
  const styleClasses =
    style === "primary"
      ? "rounded w-fit bg-primaryCTA hover:bg-primaryCTA-hover text-white font-bold"
      : "rounded w-fit bg-secondaryCTA hover:bg-secondaryCTA-hover text-white font-bold";

  return (
    <Link
      aria-label={buttonText}
      eventName={type}
      href={url || "#"}
      className={`${styleClasses} ${classNames} `}
      rel="noopener noreferrer"
    >
      {buttonText}
    </Link>
  );
};

export default Cta;
