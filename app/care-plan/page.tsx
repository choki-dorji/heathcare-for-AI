import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

export default function CarePlanPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Your Care Plans</h1>
          <p className="text-slate-600 mt-1">View and manage your personalized care plans</p>
        </div>
        <Button asChild>
          <Link href="/care-plan/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Plan
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="active">Active Plans</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Physical Recovery Plan</CardTitle>
                  <CardDescription>Created on April 15, 2025</CardDescription>
                </div>
                <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Active</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                    <span className="text-sm font-medium text-teal-600">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Exercise</h4>
                    <p className="text-sm text-slate-600">3 of 5 activities completed</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Nutrition</h4>
                    <p className="text-sm text-slate-600">7 of 10 goals achieved</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Rest</h4>
                    <p className="text-sm text-slate-600">4 of 5 recommendations followed</p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">
                    Update Progress
                  </Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Emotional Wellness Plan</CardTitle>
                  <CardDescription>Created on May 2, 2025</CardDescription>
                </div>
                <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">Active</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                    <span className="text-sm font-medium text-teal-600">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Mindfulness</h4>
                    <p className="text-sm text-slate-600">5 of 12 sessions completed</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Journaling</h4>
                    <p className="text-sm text-slate-600">8 of 20 entries completed</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <h4 className="font-medium text-slate-800 mb-1">Support Group</h4>
                    <p className="text-sm text-slate-600">2 of 4 meetings attended</p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="outline" className="mr-2">
                    Update Progress
                  </Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Post-Surgery Recovery Plan</CardTitle>
                  <CardDescription>Completed on March 10, 2025</CardDescription>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Completed
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                    <span className="text-sm font-medium text-green-600">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-slate-200 [&>div]:bg-green-500" />
                </div>

                <p className="text-sm text-slate-600 mt-4">
                  This care plan was successfully completed on March 10, 2025. All goals and activities were achieved.
                </p>

                <div className="flex justify-end mt-4">
                  <Button variant="outline">View Summary</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <div className="text-center py-12 text-slate-500">
            <p>All your care plans will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
