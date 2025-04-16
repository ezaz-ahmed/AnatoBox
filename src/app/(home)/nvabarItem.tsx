import Link from "next/link";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

export const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <Button
        variant="neutral"
        className={cn(
          "text-base",
          isActive && "bg-main text-main-foreground font-bold shadow-none"
        )}
      >
        {children}
      </Button>
    </Link>
  );
};