"use client";

import { Layout, Compass, List, BarChart } from "lucide-react";
import SidebarItem from "./Sidebar-Item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses"
  },{
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics" 
  }
]

const SidebarRoutes = () => {
  const pathname = usePathname()
  const isTeacherPage = pathname.includes('/teacher')
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full h-full">
      {routes.map((route) => {
        return (
          <SidebarItem
            icon={route.icon}
            key={route.href}
            href={route.href}
            label={route.label}
          />
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
