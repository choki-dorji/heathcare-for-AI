import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Video } from "lucide-react"
import Link from "next/link"

export function ResourcesPreview() {
  const resources = [
    {
      title: "Nutrition After Treatment",
      type: "article",
      icon: BookOpen,
    },
    {
      title: "Gentle Exercise Routines",
      type: "video",
      icon: Video,
    },
    {
      title: "Managing Side Effects",
      type: "guide",
      icon: FileText,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Resources</CardTitle>
        <CardDescription>Personalized resources for your recovery</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <div className="p-2 rounded-full bg-slate-100">
                <resource.icon className="h-4 w-4 text-slate-700" />
              </div>
              <div>
                <p className="text-sm font-medium">{resource.title}</p>
                <p className="text-xs text-slate-500 capitalize">{resource.type}</p>
              </div>
            </div>
          ))}

          <Button asChild variant="outline" className="w-full mt-2">
            <Link href="/resources">View All Resources</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
