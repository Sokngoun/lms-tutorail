"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";

const NavbarRoutes = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isTeacher = pathname.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/courses");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacher || isPlayerPage ? (
        <Link href="/">
          <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
