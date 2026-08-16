import { cn } from "@/lib/utils";

const GREEN = "#1E7B5B";
const CREAM = "#F4ECD6";

/**
 * MAHA Kopi Bali circular emblem, recreated as a scalable SVG so it stays
 * crisp at any size and needs no background. Swap for the raster brand file
 * only if an exact-pixel match is required.
 */
export function LogoMark({
  className,
  size = 44,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label="MAHA Kopi Bali"
    >
      <defs>
        <radialGradient id="mahaBean" cx="0.4" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#B06A34" />
          <stop offset="0.55" stopColor="#7E4420" />
          <stop offset="1" stopColor="#552B13" />
        </radialGradient>
      </defs>

      {/* white backing ring */}
      <circle cx="100" cy="100" r="99" fill="#ffffff" />
      {/* green disc */}
      <circle cx="100" cy="100" r="93" fill={GREEN} />
      {/* inner ring lines */}
      <circle cx="100" cy="100" r="83" fill="none" stroke={CREAM} strokeWidth="1.6" />
      <circle cx="100" cy="100" r="79" fill="none" stroke={CREAM} strokeWidth="0.8" opacity="0.7" />

      {/* MAHA. */}
      <text
        x="101"
        y="83"
        textAnchor="middle"
        fill={CREAM}
        fontSize="33"
        fontWeight="700"
        letterSpacing="1.5"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        MAHA.
      </text>

      {/* leaves */}
      <g fill={GREEN} stroke={CREAM} strokeWidth="1.6" strokeLinejoin="round">
        {/* left leaf */}
        <path d="M83 116 C 70 103 54 104 46 116 C 54 128 70 129 83 116 Z" />
        <path d="M50 116 L 80 116" fill="none" strokeWidth="1.1" />
        {/* right leaf (mirrored) */}
        <path d="M117 116 C 130 103 146 104 154 116 C 146 128 130 129 117 116 Z" />
        <path d="M120 116 L 150 116" fill="none" strokeWidth="1.1" />
      </g>

      {/* coffee bean */}
      <g>
        <ellipse cx="100" cy="115" rx="14" ry="19" fill="url(#mahaBean)" stroke="#48240F" strokeWidth="1" />
        <path
          d="M100 98 C 95 106 95 124 100 132"
          fill="none"
          stroke="#3E2010"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M97 101 C 93 108 93 122 97 129"
          fill="none"
          stroke="#C98A56"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* Kopi Bali */}
      <text
        x="101"
        y="157"
        textAnchor="middle"
        fill={CREAM}
        fontSize="25"
        fontStyle="italic"
        fontWeight="500"
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        Kopi Bali
      </text>
    </svg>
  );
}

/**
 * Full lockup: emblem + stacked wordmark. Use where there is room (footer,
 * mobile sheet header). For tight spaces use <LogoMark /> alone.
 */
export function Logo({
  className,
  onDark = false,
  markSize = 40,
}: {
  className?: string;
  onDark?: boolean;
  markSize?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark size={markSize} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-extrabold tracking-[0.16em] text-base",
            onDark ? "text-cream" : "text-espresso",
          )}
        >
          MAHA
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-semibold tracking-[0.4em]",
            onDark ? "text-gold" : "text-leaf",
          )}
        >
          KOPI · BALI
        </span>
      </span>
    </span>
  );
}
