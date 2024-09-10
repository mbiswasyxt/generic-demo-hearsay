import { useRef, useState, useEffect } from "react";

const useScrollCarousel = (cardsToShow: number) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [scrollPosition, setScrollPosition] = useState<
    "start" | "middle" | "end"
  >("start");
  const touchStartX = useRef(0);

  // Function to update scroll position
  const updateScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft === 0) {
        setScrollPosition("start");
      } else if (scrollLeft >= maxScrollLeft) {
        setScrollPosition("end");
      } else {
        setScrollPosition("middle");
      }
    }
  };

  // Scroll to the next card
  const scrollToNext = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / cardsToShow; // Calculate card width based on visible cards
      const currentScrollLeft = containerRef.current.scrollLeft;
      const maxScrollLeft =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;

      // Ensure not to overshoot the max scroll value
      const newScrollLeft = Math.min(
        currentScrollLeft + cardWidth,
        maxScrollLeft
      );

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Scroll to the previous card
  const scrollToPrevious = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth / cardsToShow; // Calculate card width based on visible cards
      const currentScrollLeft = containerRef.current.scrollLeft;

      // Ensure not to scroll before the start
      const newScrollLeft = Math.max(currentScrollLeft - cardWidth, 0);

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Handle touch start for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move for swipe gestures
  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      scrollToNext();
    } else if (diff < -50) {
      scrollToPrevious();
    }
  };

  // Monitor scroll and update scroll position accordingly
  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", updateScrollPosition);
      return () => {
        ref.removeEventListener("scroll", updateScrollPosition);
      };
    }
  }, []);

  return {
    containerRef,
    scrollPosition,
    scrollToNext,
    scrollToPrevious,
    handleTouchStart,
    handleTouchMove,
  };
};

export default useScrollCarousel;
