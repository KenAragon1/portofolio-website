"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const currentPathname = usePathname();
  const NavLinks = [
    {
      label: "Home",
      href: "/",
      active: currentPathname === "/",
    },
    {
      label: "Projects",
      href: "/projects",
      active: currentPathname === "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
      active: currentPathname === "/skills",
    },
  ];
  return (
    <div className="border-neutral-600 rounded-lg border p-2 w-fit fixed  top-[10px] inset-x-0  mx-auto z-50 ">
      <div className="justify-self-center">
        <ul className="flex justify-self-center font-semibold text-sm text-neutral-200 ">
          {NavLinks.map(({ label, href, active }, index) => (
            <li
              key={index + 1}
              className={` px-4 py-1 transition-colors rounded-sm duration-400 ${
                active ? "bg-emerald-500 text-neutral-50  " : ""
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
