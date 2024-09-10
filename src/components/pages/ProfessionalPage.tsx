import {
  AppliedFilters,
  Facets,
  Geolocation,
  Pagination,
  ResultsCount,
  VerticalResults,
} from "@yext/search-ui-react";
import ProfessionalCard from "../cards/ProfessionalCard";
import { useVerticalSearch } from "../useVerticalSearch";
import Loader from "../Loader";

const ProfessionalPage = ({ verticalKey }: any) => {
  const { isLoaded } = useVerticalSearch(verticalKey) || false;

  return (
    <>
      {isLoaded ? (
        <div className="flex flex-row gap-2 mt-4 w-full md:px-14 px-4 ">
          <div className="hidden md:block w-1/5">
            <Facets
              customCssClasses={{ facetsContainer: "ml-8 mr-4 " }}
            ></Facets>
          </div>
          <div className="flex-grow md:w-4/5 w-full">
            <div className="flex flex-col items-baseline  ">
              <ResultsCount />
              <AppliedFilters />
            </div>
            <VerticalResults
              CardComponent={ProfessionalCard}
              customCssClasses={{
                verticalResultsContainer: "flex flex-col gap-8",
              }}
            />
            <Pagination />
            <Geolocation />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfessionalPage;
