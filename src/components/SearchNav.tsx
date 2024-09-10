import { useEffect, useState } from "react";
import { VerticalInterface, verticalNavItems } from "./SearchPage";

type SearchNavProps = {
  currentVertical: VerticalInterface;
  setCurrentVertical: (currentVertical: VerticalInterface) => void;
};

const SearchNav = ({ currentVertical, setCurrentVertical }: SearchNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<string>(currentVertical.key);
  useEffect(() => {
    setSelected(currentVertical.key);
  }, [currentVertical]);
  return (
    <nav className="bg-transparent p-4">
      <ul className="hidden md:flex md:justify-between space-x-4 w-full">
        {verticalNavItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelected(item.key);
              setCurrentVertical(item);
            }}
            className={`hover:text-gray-300 hover:cursor-pointer ${
              selected === item.key
                ? `border-b border-primary`
                : `text-[#777777]`
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="md:hidden w-full flex-row flex items-center">
        {verticalNavItems
          .filter((item) => item.key === "all" || item.key === selected)
          .map((item, index) => (
            <li key={index} className="hover:text-gray-300 mr-4 text-[#777777]">
              {item.name}
            </li>
          ))}
        <div className="relative ml-auto z-50">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-gray-300 focus:outline-none"
          >
            More
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
              {verticalNavItems
                .filter((item) => item.key !== "all" && item.key !== selected)
                .map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelected(item.key);
                      setCurrentVertical(item);
                    }}
                    className="block px-4 py-2 hover:text-gray-300 text-[#777777]"
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
};
export default SearchNav;
