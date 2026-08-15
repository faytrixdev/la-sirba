import { classNames } from "@/lib/utils";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  variant?: "food" | "chef" | "restaurant" | "ambiance" | "event";
};

const variantColors = {
  food: "from-ocre/30 to-brun/20",
  chef: "from-ocre-clair/30 to-brun/20",
  restaurant: "from-brun/15 to-ocre/20",
  ambiance: "from-ocre/20 to-cream/40",
  event: "from-brun/20 to-ocre-clair/20",
};

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function PlaceholderImage({
  label,
  className,
  aspect = "video",
  variant = "food",
}: PlaceholderImageProps) {
  return (
    <div
      className={classNames(
        "relative overflow-hidden bg-gradient-to-br",
        variantColors[variant],
        aspectRatios[aspect],
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-brun/10 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-brun/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
          {label && (
            <span className="text-xs font-medium text-brun/40 uppercase tracking-wider">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
