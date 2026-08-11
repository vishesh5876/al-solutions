import type { ReactNode } from "react";

export function Marquee({
  children,
  duration = 40,
  className = "",
  repeat = 2,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  repeat?: number;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="flex w-max animate-[marquee_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}