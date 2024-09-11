import { useSearchActions } from "@yext/search-headless-react";
import { useState, useEffect } from "react";

export const useVerticalSearch = (vertical: string) => {
  const searchActions = useSearchActions();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (vertical) {
        setIsLoaded(false);
        searchActions.setVertical(vertical);
        searchActions.executeVerticalQuery().then((res) => {
          setIsLoaded(true);
        });
      }
    }
  }, [searchActions, vertical]);

  return { isLoaded };
};
