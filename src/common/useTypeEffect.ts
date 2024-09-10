import { useState, useEffect, useRef } from "react";

export const useTypingEffect = () => {
  const [queryPrompts, setQueryPrompts] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);
  const indexRef = useRef(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const getVisibleElement = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const selector = isMobile
      ? ".demo.mobile-search-bar"
      : ".demo.desktop-search-bar";
    return document.querySelector(selector) as HTMLInputElement;
  };

  const typingEffect = () => {
    setIsTyping(true);
    const word = queryPrompts[indexRef.current].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        const ele = getVisibleElement();
        if (ele) {
          ele.placeholder += word.shift();
        }
        timerRef.current = window.setTimeout(loopTyping, 100);
      } else {
        deletingEffect();
      }
    };
    loopTyping();
  };

  const deletingEffect = () => {
    const word = queryPrompts[indexRef.current].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        const ele = getVisibleElement();
        if (ele) {
          ele.placeholder = word.join("");
        }
        timerRef.current = window.setTimeout(loopDeleting, 65);
      } else {
        indexRef.current = (indexRef.current + 1) % queryPrompts.length;
        typingEffect();
      }
    };
    loopDeleting();
  };

  const fetchUnivPrompts = async () => {
    const url = `https://cdn.yextapis.com/v2/accounts/me/search/autocomplete?v=20190101&api_key=${import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY}&sessionTrackingEnabled=false&experienceKey=${import.meta.env.YEXT_PUBLIC_SEARCH_EXP_KEY}&input=`;

    try {
      const res = await fetch(url);
      const body = await res.json();
      const qs = body.response.results.map((item: any) => item.value);
      setQueryPrompts(qs);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    }
  };

  useEffect(() => {
    fetchUnivPrompts();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (queryPrompts.length > 0 && !isTyping) {
      typingEffect();
    }
  }, [queryPrompts]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { queryPrompts };
};
