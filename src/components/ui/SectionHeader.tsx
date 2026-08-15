import { classNames } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={classNames(
        "mb-10 md:mb-14",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={classNames(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight",
          light ? "text-white" : "text-brun"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={classNames(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-cream/80" : "text-brun/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
