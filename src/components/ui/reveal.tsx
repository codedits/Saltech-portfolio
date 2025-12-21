"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // seconds
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(node);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-fade-up" : "opacity-0"}`}
      style={visible ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
