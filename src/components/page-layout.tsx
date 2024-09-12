import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { twMerge } from "tailwind-merge";
import { searchConfig } from "./config";

type Props = {
  _site?: any;
  children?: React.ReactNode;
  className?: string;
};
const PageLayout = ({ _site, children, className }: Props) => {
  return (
    <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
      <div
        className={twMerge(
          "min-h-screen bg-secondary text-secondary-text",
          className
        )}
      >
        {/* <Header _site={_site} /> */}
        {children}
        {/* <Footer _site={_site}></Footer> */}
        {/* {import.meta.env.YEXT_PUBLIC_CHAT_APIKEY &&
        import.meta.env.YEXT_PUBLIC_CHAT_BOTID && (
          <ChatHeadlessProvider config={chatConfig}>
            <ChatPopUp
              title="Cook Children Chat"
              stream={false}
              customCssClasses={{
                buttonIcon: "text-white",
                button: "chatHeaderAndBotResponseColors",
                panelCssClasses: {
                  messageBubbleCssClasses: {
                    text: "text-base",
                    text__user: "chatHeaderAndBotResponseColors",
                    bubble__user: "chatHeaderAndBotResponseColors",
                  },

                  inputCssClasses: {
                    sendButton: "chatHeaderAndBotResponseColors",
                    textArea: "chatTextboxColor",
                  },
                },
                headerCssClasses: {
                  container: "chatHeaderAndBotResponseColors",
                  title: "overflow-hidden",
                },
              }}
            />
          </ChatHeadlessProvider>
        )} */}
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
