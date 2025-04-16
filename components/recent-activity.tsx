import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      date: "Today, 9:30 AM",
      description: "Completed daily symptom tracking",
      type: "tracking",
    },
    {
      date: "Today, 11:15 AM",
      description: "Scheduled appointment with Dr. Johnson",
      type: "appointment",
    },
    {
      date: "Yesterday, 2:45 PM",
      description: "Updated Physical Recovery Plan progress",
      type: "care-plan",
    },
    {
      date: "Yesterday, 5:20 PM",
      description: "Watched 'Nutrition After Treatment' video",
      type: "resource",
    },
    {
      date: "May 5, 10:00 AM",
      description: "Attended virtual support group meeting",
      type: "community",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest actions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">{activity.description}</p>
                <p className="text-xs text-slate-500">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
