import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.35em] text-lime">
        ( {index} — {eyebrow} )
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
