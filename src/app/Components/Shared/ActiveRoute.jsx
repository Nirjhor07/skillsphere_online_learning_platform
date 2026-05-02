"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveRoute = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  console.log(pathname);
  return (
    <div className={isActive ? "text-blue-500" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default ActiveRoute;
