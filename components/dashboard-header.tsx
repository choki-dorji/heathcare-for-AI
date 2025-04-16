"use client"

import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function DashboardHeader() {
  const [notifications] = useState(3)

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Welcome, Sarah</h1>
        <p className="text-slate-600 mt-1">Here's an overview of your cancer care journey</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </Button>
        <Button asChild>
          <Link href="/care-plan/new">Create Care Plan</Link>
        </Button>
      </div>
    </div>
  )
}
