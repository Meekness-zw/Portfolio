'use client';
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack AI Engineer",
  "Mobile App Developer",
  "AI Agent Builder",
  "Next.js & React Native Dev",
];

/** Terminal-style role line that types, pauses, deletes and moves to the next role. */
const TypedRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  // Start fully typed so the server-rendered HTML shows a complete role.
  const [length, setLength] = useState(roles[0].length);
  const [deleting, setDeleting] = useState(false);

  const role = roles[roleIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let delay = deleting ? 35 : 70;
    if (!deleting && length === role.length) delay = 2200;

    const timer = setTimeout(() => {
      if (!deleting && length === role.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [length, deleting, role]);

  return (
    <span className="inline-flex items-center text-lg xl:text-xl font-primary h-8" aria-label={roles[0]}>
      <span className="text-accent mr-2" aria-hidden>&gt;</span>
      <span aria-hidden>{role.slice(0, length)}</span>
      <span className="cursor-blink ml-0.5 inline-block w-[10px] h-[1.1em] bg-accent" aria-hidden />
    </span>
  );
};

export default TypedRole;
