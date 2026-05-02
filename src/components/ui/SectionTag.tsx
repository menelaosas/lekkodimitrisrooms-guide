import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  /** Light variant for dark backgrounds */
  light?: boolean;
}

/**
 * Eyebrow label with a gold line prefix.
 * e.g. "── Υπηρεσίες"
 */
export function SectionTag({ children, className, light = false }: SectionTagProps) {
  return (
    <p
      className={cn(
        "section-tag",
        light && "text-gold-light [&::before]:bg-gold-light",
        className,
      )}
    >
      {children}
    </p>
  );
}
