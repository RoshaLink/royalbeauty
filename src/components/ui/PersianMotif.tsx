interface PersianMotifProps {
  className?: string;
  variant?: "arch" | "lattice";
}

/**
 * Minimal decorative line-art SVGs, inspired by Persian geometric motifs.
 * Purely decorative — always aria-hidden, used sparingly at low opacity.
 */
export function PersianMotif({
  className = "",
  variant = "arch",
}: PersianMotifProps) {
  if (variant === "lattice") {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M100 0L200 100L100 200L0 100L100 0Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M100 40L160 100L100 160L40 100L100 40Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 220V90C4 43.6 42.6 4 80 4C117.4 4 156 43.6 156 90V220"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M28 220V96C28 61.5 51 28 80 28C109 28 132 61.5 132 96V220"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M80 4V220"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 6"
      />
    </svg>
  );
}
