import {
  GetHeadConfig,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import SearchPage from "../components/SearchPage";
import PageLayout from "../components/page-layout";
import "../index.css";

export const config: TemplateConfig = {
  name: "search",
};

export const getPath = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Capital Fins Bank  | Search",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Capital fins Search",
        },
      },
    ],
  };
};

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <>
      <PageLayout _site={document._site}>
        <SearchPage />
      </PageLayout>
    </>
  );
};

export default Search;
