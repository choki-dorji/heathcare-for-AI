import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { CarePlanOverview } from "@/components/care-plan-overview"
import { ResourcesPreview } from "@/components/resources-preview"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />
      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <CarePlanOverview />
          <RecentActivity />
        </div>
        <div>
          <ResourcesPreview />
        </div>
      </div>
    </div>
  )
}
