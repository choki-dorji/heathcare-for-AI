"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

export function SleepTracker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { day: "May 24", hours: 6.5, quality: 6 },
    { day: "May 25", hours: 7.2, quality: 7 },
    { day: "May 26", hours: 6.8, quality: 6 },
    { day: "May 27", hours: 7.5, quality: 8 },
    { day: "May 28", hours: 8.0, quality: 9 },
    { day: "May 29", hours: 7.0, quality: 7 },
    { day: "May 30", hours: 6.5, quality: 6 },
  ]

  const sleepEntries = [
    {
      date: "May 30, 2025",
      hours: 6.5,
      quality: "Fair",
      notes: "Woke up a couple of times during the night. Some difficulty falling back asleep.",
    },
    {
      date: "May 29, 2025",
      hours: 7.0,
      quality: "Good",
      notes: "Slept through most of the night. Woke up feeling somewhat rested.",
    },
    {
      date: "May 28, 2025",
      hours: 8.0,
      quality: "Very Good",
      notes: "Best sleep in a while. Went to bed early and practiced relaxation techniques.",
    },
    {
      date: "May 27, 2025",
      hours: 7.5,
      quality: "Good",
      notes: "Solid night of sleep. Used the lavender essential oil diffuser.",
    },
    {
      date: "May 26, 2025",
      hours: 6.8,
      quality: "Fair",
      notes: "Some trouble falling asleep. Mind was racing with thoughts about tomorrow's appointment.",
    },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-500">Loading sleep data...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-sm text-slate-500 mb-1">Average Sleep Duration</div>
          <div className="text-2xl font-bold">7.1 hours</div>
          <div className="text-xs text-teal-600 mt-1">+0.5 hours from last week</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-sm text-slate-500 mb-1">Average Sleep Quality</div>
          <div className="text-2xl font-bold">7.0/10</div>
          <div className="text-xs text-teal-600 mt-1">+1.0 from last week</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-sm text-slate-500 mb-1">Sleep Goal Progress</div>
          <div className="text-2xl font-bold">5 of 7 days</div>
          <div className="text-xs text-slate-500 mt-1">Goal: 7+ hours of sleep</div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="hours" name="Sleep Hours" fill="#8b5cf6" />
            <Bar dataKey="quality" name="Sleep Quality" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Recent Sleep Entries</h3>
        {sleepEntries.map((entry, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{entry.hours} hours</div>
                  <div className="text-sm text-slate-500">{entry.date}</div>
                </div>
                <div className="text-sm font-medium text-indigo-600">{entry.quality}</div>
              </div>
              <p className="text-sm text-slate-600 mt-2">{entry.notes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
