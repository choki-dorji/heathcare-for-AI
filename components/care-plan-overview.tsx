import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function CarePlanOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Care Plans</CardTitle>
        <CardDescription>Track your progress on active care plans</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium">Physical Recovery Plan</h3>
              <span className="text-sm font-medium text-teal-600">65%</span>
            </div>
            <Progress value={65} className="h-2" />
            <div className="flex justify-between text-sm text-slate-500">
              <span>Started: April 15, 2025</span>
              <span>3 of 5 activities completed</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium">Emotional Wellness Plan</h3>
              <span className="text-sm font-medium text-teal-600">40%</span>
            </div>
            <Progress value={40} className="h-2" />
            <div className="flex justify-between text-sm text-slate-500">
              <span>Started: May 2, 2025</span>
              <span>2 of 5 activities completed</span>
            </div>
          </div>

          <Button asChild variant="outline" className="w-full">
            <Link href="/care-plan">View All Care Plans</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
