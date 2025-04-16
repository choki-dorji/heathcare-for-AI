import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WellnessTracker } from "@/components/wellness-tracker"
import { SymptomTracker } from "@/components/symtop-tracker"
import { MoodTracker } from "@/components/mood-tracker"
import { SleepTracker } from "@/components/sleep-tracker"
import { Activity, Brain, Heart, LineChart, Plus, Smile, Zap } from "lucide-react"

export default function WellnessPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Wellness Tracker</h1>
          <p className="text-slate-600 mt-1">Monitor your physical and emotional well-being</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Log New Entry
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <WellnessMetricCard title="Overall Wellness" value={78} change={+5} icon={Heart} color="text-rose-500" />
        <WellnessMetricCard title="Physical Activity" value={65} change={+12} icon={Activity} color="text-teal-500" />
        <WellnessMetricCard title="Emotional Well-being" value={72} change={-3} icon={Smile} color="text-amber-500" />
        <WellnessMetricCard title="Energy Level" value={60} change={+8} icon={Zap} color="text-indigo-500" />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="physical">Physical</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="mood">Mood</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Wellness Trends</CardTitle>
                  <CardDescription>Your wellness metrics over the past 30 days</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <WellnessTracker />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Insights</CardTitle>
                  <CardDescription>Patterns and observations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 rounded-full bg-teal-100">
                      <Brain className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sleep and Energy Connection</p>
                      <p className="text-xs text-slate-500">
                        Your energy levels are higher on days following 7+ hours of sleep.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 rounded-full bg-amber-100">
                      <LineChart className="h-4 w-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Symptom Improvement</p>
                      <p className="text-xs text-slate-500">
                        Your reported fatigue has decreased by 15% over the past month.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-rose-100">
                      <Activity className="h-4 w-4 text-rose-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Activity Impact</p>
                      <p className="text-xs text-slate-500">
                        Moderate exercise days correlate with improved mood scores.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Insights
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="physical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Physical Activity</CardTitle>
              <CardDescription>Track your exercise and physical wellness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Weekly Activity Goal</h3>
                    <span className="text-sm font-medium text-teal-600">3 of 5 days</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500 mb-1">Steps (Daily Avg)</div>
                    <div className="text-2xl font-bold">4,285</div>
                    <div className="text-xs text-teal-600 mt-1">+12% from last week</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500 mb-1">Active Minutes</div>
                    <div className="text-2xl font-bold">32 min</div>
                    <div className="text-xs text-teal-600 mt-1">+8% from last week</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500 mb-1">Strength Training</div>
                    <div className="text-2xl font-bold">2 days</div>
                    <div className="text-xs text-rose-600 mt-1">-1 day from last week</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Recent Activities</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium">Walking</div>
                        <div className="text-sm text-slate-500">Yesterday, 30 minutes</div>
                      </div>
                      <div className="text-teal-600 font-medium">2,500 steps</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium">Gentle Yoga</div>
                        <div className="text-sm text-slate-500">2 days ago, 45 minutes</div>
                      </div>
                      <div className="text-teal-600 font-medium">Low impact</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium">Strength Training</div>
                        <div className="text-sm text-slate-500">3 days ago, 20 minutes</div>
                      </div>
                      <div className="text-teal-600 font-medium">Light weights</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Log New Activity</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Symptom Tracker</CardTitle>
              <CardDescription>Monitor and track your symptoms over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <SymptomTracker />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mood" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mood Tracker</CardTitle>
              <CardDescription>Track your emotional well-being</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <MoodTracker />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sleep Tracker</CardTitle>
              <CardDescription>Monitor your sleep patterns</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <SleepTracker />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface WellnessMetricCardProps {
  title: string
  value: number
  change: number
  icon: React.ElementType
  color: string
}

function WellnessMetricCard({ title, value, change, icon: Icon, color }: WellnessMetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}%</div>
        <div className="flex items-center mt-1">
          <span className={`text-xs ${change >= 0 ? "text-teal-600" : "text-rose-600"}`}>
            {change >= 0 ? "+" : ""}
            {change}% from last week
          </span>
        </div>
        <Progress value={value} className="h-2 mt-2" />
      </CardContent>
    </Card>
  )
}
