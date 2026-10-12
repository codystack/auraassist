const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="m3 12.5 9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
    </>
  ),
  send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M16 6.5a3 3 0 0 1 0 5.6M18 14.8c1.3.7 2.1 2 2.5 4.2" />
    </>
  ),
  cap: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="M7 11v4.5c1.4 1.3 3 2 5 2s3.6-.7 5-2V11" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 11h6M9 15h4" />
    </>
  ),
  badge: (
    <>
      <path d="M12 3 14.5 5l3.2-.3.9 3.1 2.7 1.8-1.2 3 1.2 3-2.7 1.8-.9 3.1-3.2-.3L12 22l-2.5-2-3.2.3-.9-3.1-2.7-1.8 1.2-3-1.2-3 2.7-1.8.9-3.1 3.2.3L12 3Z" />
      <path d="m8.5 12.5 2.3 2.3 4.7-4.8" />
    </>
  ),
  list: (
    <>
      <circle cx="7" cy="8" r="2.6" />
      <path d="M2.5 17c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6M14 7h7M14 11h7M14 15h5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5h6v2M3 12h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r=".5" />
    </>
  ),
  refresh: <path d="M20 11a8 8 0 0 0-14.7-4M4 4v3.5h3.5M4 13a8 8 0 0 0 14.7 4M20 20v-3.5h-3.5" />,
  inbox: (
    <>
      <path d="M3 13 5.5 5h13L21 13v6H3v-6Z" />
      <path d="M3 13h5l1.5 2.5h5L16 13h5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-2 2.5-5 2.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  pen: <path d="m14 5 5 5M4 20l1-5L15.5 4.5a2.1 2.1 0 0 1 3 3L8 18l-4 2Z" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  arrowRight: <path d="M4 12h15m-5-5 5 5-5 5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
} as const;

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  className = "size-5",
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
