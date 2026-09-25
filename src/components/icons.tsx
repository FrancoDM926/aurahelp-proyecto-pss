type IconProps = {
  className?: string;
};

function base(className?: string) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export const CalendarIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4M7.5 14h3M13.5 14h3M7.5 17.5h3" />
  </svg>
);

export const ClipboardIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9 4.5H7.5A2 2 0 0 0 5.5 6.5v13A2 2 0 0 0 7.5 21.5h9a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2H15" />
    <rect x="9" y="2.8" width="6" height="3.4" rx="1.2" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const SyringeIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <g transform="rotate(-45 12 12)">
      <path d="M10.5 8.5h5v7h-5z" />
      <path d="M15.5 10.5h2.5v3h-2.5z" />
      <path d="M8.5 12H4.5M18 12h2" />
    </g>
  </svg>
);

export const WalletIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H18a2 2 0 0 1 2 2v1" />
    <rect x="3" y="8.5" width="18" height="10.5" rx="2.5" />
    <circle cx="16.5" cy="13.75" r="1.25" />
  </svg>
);

export const HeartPulseIcon = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 20.5S3.8 15.4 3.8 9.3A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.2 2.7c0 6.1-8.2 11.2-8.2 11.2Z" />
    <path d="M6.3 11.3h2.6l1.3-2.6 1.9 5.3 1.5-3.7 1.2 2.1h3" />
  </svg>
);

export const serviceIcons = {
  calendar: CalendarIcon,
  clipboard: ClipboardIcon,
  syringe: SyringeIcon,
  wallet: WalletIcon,
} as const;

export type ServiceIcon = keyof typeof serviceIcons;
