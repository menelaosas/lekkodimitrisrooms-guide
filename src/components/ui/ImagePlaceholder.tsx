import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-stone/8",
        className,
      )}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sea/8 via-transparent to-terracotta/6" />
      <div className="relative flex flex-col items-center gap-3 text-center p-6">
        <div className="h-px w-10 bg-sea/30" />
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-pebble/60">{label}</p>
        <div className="h-px w-10 bg-sea/30" />
      </div>
    </div>
  );
}
