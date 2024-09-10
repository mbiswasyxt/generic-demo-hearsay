import { ChatConfig } from "@yext/chat-headless-react";
import { SearchConfig } from "@yext/search-headless-react";

export const searchConfig: SearchConfig = {
  apiKey: import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY,
  experienceKey: import.meta.env.YEXT_PUBLIC_SEARCH_EXP_KEY,
  locale: "en",
  experienceVersion: "STAGING",
};

export const chatConfig: ChatConfig = {
  apiKey: import.meta.env.YEXT_PUBLIC_CHAT_APIKEY,
  botId: import.meta.env.YEXT_PUBLIC_CHAT_BOTID,
};
