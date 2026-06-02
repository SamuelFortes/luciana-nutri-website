import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c4.97 0 9-3.06 9-9 0-4.06-2-5-4-5s-3 1-5 1-3-1-5-1-4 .94-4 5c0 5.94 4.03 9 9 9Z"></path>
      <path d="M12 8V4c0-1.1.9-2 2-2"></path>
    </svg>
  );
}
