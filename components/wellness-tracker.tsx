"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function WellnessTracker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { day: "May 1", overall: 65, physical: 60, emotional: 70, energy: 55 },
    { day: "May 5", overall: 68, physical: 62, emotional: 72, energy: 58 },
    { day: "May 10", overall: 70, physical: 65, emotional: 75, energy: 60 },
    { day: "May 15", overall: 72, physical: 68, emotional: 74, energy: 62 },
    { day: "May 20", overall: 75, physical: 70, emotional: 73, energy: 65 },
    { day: "May 25", overall: 78, physical: 65, emotional: 72, energy: 60 },
    { day: "May 30", overall: 78, physical: 65, emotional: 72, energy: 60 },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-500">Loading wellness data...</p>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
        <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="overall" stroke="#f43f5e" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="physical" stroke="#14b8a6" strokeWidth={2} />
        <Line type="monotone" dataKey="emotional" stroke="#f59e0b" strokeWidth={2} />
        <Line type="monotone" dataKey="energy" stroke="#6366f1" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
