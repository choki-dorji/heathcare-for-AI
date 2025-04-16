"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

export function MoodTracker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { day: "May 1", mood: 6 },
    { day: "May 2", mood: 5 },
    { day: "May 3", mood: 7 },
    { day: "May 4", mood: 6 },
    { day: "May 5", mood: 8 },
    { day: "May 6", mood: 7 },
    { day: "May 7", mood: 6 },
    { day: "May 8", mood: 7 },
    { day: "May 9", mood: 8 },
    { day: "May 10", mood: 7 },
    { day: "May 11", mood: 6 },
    { day: "May 12", mood: 7 },
    { day: "May 13", mood: 8 },
    { day: "May 14", mood: 7 },
    { day: "May 15", mood: 9 },
    { day: "May 16", mood: 8 },
    { day: "May 17", mood: 7 },
    { day: "May 18", mood: 6 },
    { day: "May 19", mood: 7 },
    { day: "May 20", mood: 8 },
    { day: "May 21", mood: 7 },
    { day: "May 22", mood: 6 },
    { day: "May 23", mood: 7 },
    { day: "May 24", mood: 8 },
    { day: "May 25", mood: 7 },
    { day: "May 26", mood: 8 },
    { day: "May 27", mood: 9 },
    { day: "May 28", mood: 8 },
    { day: "May 29", mood: 7 },
    { day: "May 30", mood: 8 },
  ]

  const moodEntries = [
    {
      date: "May 30, 2025",
      mood: "Good",
      notes: "Felt energetic today. Went for a walk and had lunch with a friend.",
    },
    {
      date: "May 29, 2025",
      mood: "Average",
      notes: "Some fatigue in the afternoon, but overall a stable day.",
    },
    {
      date: "May 28, 2025",
      mood: "Good",
      notes: "Productive day. Completed some tasks I've been putting off.",
    },
    {
      date: "May 27, 2025",
      mood: "Very Good",
      notes: "Great day! Received good news from my doctor about my latest test results.",
    },
    {
      date: "May 26, 2025",
      mood: "Good",
      notes: "Spent time with family. Felt supported and loved.",
    },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-500">Loading mood data...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
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
            <Area type="monotone" dataKey="mood" stroke="#f59e0b" fill="#fef3c7" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Recent Mood Entries</h3>
        {moodEntries.map((entry, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{entry.mood}</div>
                  <div className="text-sm text-slate-500">{entry.date}</div>
                </div>
                <MoodIndicator mood={entry.mood} />
              </div>
              <p className="text-sm text-slate-600 mt-2">{entry.notes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function MoodIndicator({ mood }: { mood: string }) {
  const getColor = () => {
    switch (mood) {
      case "Very Good":
        return "bg-green-500"
      case "Good":
        return "bg-teal-500"
      case "Average":
        return "bg-amber-500"
      case "Poor":
        return "bg-orange-500"
      case "Very Poor":
        return "bg-rose-500"
      default:
        return "bg-slate-500"
    }
  }

  return <div className={`w-3 h-3 rounded-full ${getColor()}`}></div>
}
