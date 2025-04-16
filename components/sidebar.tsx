"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  Heart,
  Home,
  LifeBuoy,
  LogOut,
  Menu,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleLogout = () => {
    console.log("Logging out...")
    router.push('/login')
  }

  const navItems = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Care Plans", href: "/care-plan", icon: FileText },
    { name: "Appointments", href: "/appointments", icon: CalendarDays },
    { name: "Resources", href: "/resources", icon: LifeBuoy },
    { name: "Community", href: "/community", icon: Users },
    { name: "Wellness Tracker", href: "/wellness", icon: Heart },
  ]

  // const newLocal = <li>
  //   <Link
  //     href="/settings"
  //     className={cn(
  //       "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors",
  //       collapsed && "justify-center px-0"
  //     )}
  //   >
  //     <Settings className={cn("h-5 w-5", collapsed && "h-6 w-6")} />
  //     {!collapsed && <span>Settings</span>}
  //   </Link>
  // </li>
  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleMobileSidebar}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile sidebar overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMobileSidebar} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r border-slate-200 flex flex-col z-50 transition-all duration-300",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "fixed inset-y-0 left-0" : "fixed -left-64 md:left-0 inset-y-0 md:relative",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className={cn("flex items-center gap-2", collapsed && "justify-center")}>
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white font-semibold">CS</span>
            </div>
            {!collapsed && <span className="font-bold text-lg">CareSync</span>}
          </div>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href ? "bg-teal-50 text-teal-700" : "text-slate-700 hover:bg-slate-100",
                    collapsed && "justify-center px-0",
                  )}
                >
                  <item.icon className={cn("h-5 w-5", collapsed && "h-6 w-6")} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <ul className="space-y-1">
            {/* {newLocal} */}
            <li>
              <button
                onClick={handleLogout}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors w-full",
                  collapsed && "justify-center px-0",
                )}
              >
                <LogOut className={cn("h-5 w-5", collapsed && "h-6 w-6")} />
                {!collapsed && <span>Logout</span>}
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
