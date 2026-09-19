interface IconProps {
  className?: string;
}

export function IconLeaf({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 26C6 14 14 6 26 6C26 18 18 26 6 26Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M6 26C12 20 18 14 26 6" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function IconDroplet({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 5C16 5 24 15.5 24 21.5C24 26.19 20.42 29 16 29C11.58 29 8 26.19 8 21.5C8 15.5 16 5 16 5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
