"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      buttonRef.current &&
      buttonRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="relative flex flex-row-reverse items-center">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full cursor-pointer transition"
        aria-label="Toggle search"
      >
        <Search className="w-[22px] h-[22px] md:w-[30px] md:h-[30px] text-gray-500" />
      </button>

      <input
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={handleBlur}
        value={search}
        type="text"
        placeholder="Search..."
        className={`
          absolute right-full top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-800 shadow-sm
          transition-all duration-300 ease-in-out  focus:outline-none focus:border-amber-500
          ${
            open
              ? "w-48 opacity-100 scale-100"
              : "w-0 opacity-0 scale-95 pointer-events-none"
          }
        `}
        style={{ transformOrigin: "right center" }}
      />
    </div>
  );
};

export default SearchBar;
