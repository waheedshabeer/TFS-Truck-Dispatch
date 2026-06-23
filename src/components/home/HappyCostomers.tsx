"use client";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    name: "JUAN ORTIZ",
    review:
      "It was nice, really clean and provided free candy on Halloween too.",
  },
  { name: "MIGUEL GARCIA", review: "Great service, fast and friendly." },
  {
    name: "LOLYS M.",
    review:
      "Jasmin answered my questions friendly over the phone, and William helped me personally fast, friendly, and with patience.",
  },
  {
    name: "DAVID SMITH",
    review:
      "Exceptional customer service. They went above and beyond to help me out.",
  },
  {
    name: "EMILY R.",
    review: "Fast, efficient, and very professional. Highly recommend!",
  },
  {
    name: "JAMES B.",
    review: "Friendly staff and great service. Will definitely return.",
  },
  {
    name: "SOPHIA LEE",
    review:
      "Very organized and clean place. Felt very comfortable doing business here.",
  },
  {
    name: "ROBERT J.",
    review: "Prices were fair and the service was top-notch.",
  },
  {
    name: "KAREN W.",
    review:
      "The team was very accommodating and helped me find exactly what I needed.",
  },
  {
    name: "DANIEL K.",
    review: "Smooth process and great attention to detail. Impressed!",
  },
];

const reviewsPerPage = 4;
const intervalTime = 5000;

const HappyCustomers = () => {
  const [page, setPage] = useState(0);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const node = containerRef.current;
    const threshold = window.innerWidth < 768 ? 0.01 : 0.25; // Instant trigger on mobile
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || totalPages <= 1) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isInView, totalPages]);

  const handlePageChange = (direction: "next" | "prev") => {
    if (scrolling) return;
    setScrolling(true);
    setTimeout(() => setScrolling(false), 500); // same as transition

    setPage((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalPages;
      } else {
        return (prev - 1 + totalPages) % totalPages;
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center w-full max-w-6xl mt-12"
    >
      {/* Left Button */}
      <button
        onClick={() => handlePageChange("prev")}
        className="absolute -left-6 z-10 p-3 bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="text-white w-7 h-7" />
      </button>

      {/* Reviews */}
      <div className="overflow-hidden flex-1">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-shrink-0 w-full"
            >
              {reviews
                .slice(
                  pageIndex * reviewsPerPage,
                  (pageIndex + 1) * reviewsPerPage
                )
                .map((review, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-center transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer"
                  >
                    <User className="text-8xl text-american-white mx-auto mb-4" />
                    <p className="text-american-white/80 italic">
                      &quot;{review.review}&quot;
                    </p>
                    <h4 className="mt-4 font-bold text-american-white">
                      {review.name}
                    </h4>
                    <p className="text-american-white/60 font-semibold text-xs bg-white/20 px-3 py-1 rounded-md inline-block mt-2">
                      Google Review
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={() => handlePageChange("next")}
        className="absolute -right-6 z-10 p-3 bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="text-white w-7 h-7" />
      </button>
    </div>
  );
};

export default HappyCustomers;
