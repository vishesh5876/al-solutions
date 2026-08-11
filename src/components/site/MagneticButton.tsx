import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  variant = "solid",
  withArrow = true,
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center gap-3 px-7 py-4 text-[0.8125rem] uppercase tracking-[0.18em] transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-muted-foreground"
      : "border border-line-strong text-foreground hover:bg-surface-2";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor="hover"
      className={`${base} ${styles} ${className}`}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (rect.left + rect.width / 2)) * 0.22,
          y: (e.clientY - (rect.top + rect.height / 2)) * 0.3,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <span>{children}</span>
      {withArrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      ) : null}
    </motion.a>
  );
}