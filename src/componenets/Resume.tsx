import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b mb-10">
      {/* Header row */}
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer bg-[var(--header)]"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold font-[Cousine]">View Resume</span>

        {/* Arrow */}
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>

      {/* Expanding content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <iframe
          src="https://drive.google.com/file/d/1cpjIzcEu3k6_-15t3kJnb7i6ik1TmLd_/preview"
          width="640"
          height="480"
        ></iframe>{" "}
      </div>
    </div>
  );
}
