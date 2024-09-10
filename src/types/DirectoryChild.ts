import { Address } from "@yext/search-headless-react";

export interface DirectoryChild {
  name: string;
  address: Address;
  mainPhone: string;
  slug: string;
  c_addressRegionDisplayName?: string;
  dm_childEntityIds?: string[];
}
