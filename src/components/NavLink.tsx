"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavLinkProps extends Omit<LinkProps, "href"> {
  href: LinkProps["href"];
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ className, activeClassName, href, ...props }, ref) => {
  const pathname = usePathname();
  const isStringHref = typeof href === "string";
  const isActive = isStringHref ? pathname === href : false;

  return <Link ref={ref} href={href} className={cn(className, isActive && activeClassName)} {...props} />;
});

NavLink.displayName = "NavLink";

export { NavLink };
