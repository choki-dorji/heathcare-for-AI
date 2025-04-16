"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function SymptomTracker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const data = [
    { day: "May 1", fatigue: 8, pain: 6, nausea: 2, anxiety: 7, sleep: 5 },
    { day: "May 5", fatigue: 7, pain: 5, nausea: 1, anxiety: 6, sleep: 6 },
    { day: "May 10", fatigue: 6, pain: 4, nausea: 1, anxiety: 5, sleep: 7 },
    { day: "May 15", fatigue: 5, pain: 3, nausea: 0, anxiety: 4, sleep: 6 },
    { day: "May 20", fatigue: 6, pain: 4, nausea: 1, anxiety: 5, sleep: 5 },
    { day: "May 25", fatigue: 5, pain: 3, nausea: 0, anxiety: 3, sleep: 4 },
    { day: "May 30", fatigue: 4, pain: 2, nausea: 0, anxiety: 3, sleep: 3 },
  ]

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-slate-500">Loading symptom data...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <SymptomCard name="Fatigue" value={4} change={-4} />
        <SymptomCard name="Pain" value={2} change={-4} />
        <SymptomCard name="Nausea" value={0} change={-2} />
        <SymptomCard name="Anxiety" value={3} change={-4} />
        <SymptomCard name="Sleep Issues" value={3} change={-2} />
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="fatigue" name="Fatigue" fill="#f43f5e" />
            <Bar dataKey="pain" name="Pain" fill="#f59e0b" />
            <Bar dataKey="nausea" name="Nausea" fill="#14b8a6" />
            <Bar dataKey="anxiety" name="Anxiety" fill="#6366f1" />
            <Bar dataKey="sleep" name="Sleep Issues" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

interface SymptomCardProps {
  name: string
  value: number
  change: number
}

function SymptomCard({ name, value, change }: SymptomCardProps) {
  return (
    <div className="bg-slate-50 p-4 rounded-lg">
      <div className="text-sm text-slate-500 mb-1">{name}</div>
      <div className="text-2xl font-bold">{value}/10</div>
      <div className={`text-xs ${change <= 0 ? "text-teal-600" : "text-rose-600"} mt-1`}>
        {change <= 0 ? change : `+${change}`} from initial
      </div>
    </div>
  )
}
