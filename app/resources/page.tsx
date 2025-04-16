import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink, FileText, Search, Video } from "lucide-react"
import Image from "next/image"

export default function ResourcesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Resources</h1>
        <p className="text-slate-600 mt-1">Explore helpful resources for your cancer recovery journey</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        <Input placeholder="Search resources..." className="pl-10" />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="Nutrition After Cancer Treatment"
              description="Learn about the best foods to support your recovery and overall health."
              type="article"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Gentle Exercise Routines"
              description="Safe, low-impact exercises designed specifically for cancer survivors."
              type="video"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Managing Treatment Side Effects"
              description="Comprehensive guide to managing common side effects from cancer treatments."
              type="guide"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Mindfulness Meditation"
              description="Guided meditation sessions to help manage stress and anxiety."
              type="video"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Finding Your Support Network"
              description="How to build and maintain a support network during your recovery."
              type="article"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Sleep Improvement Techniques"
              description="Evidence-based strategies to improve sleep quality during recovery."
              type="guide"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="Nutrition After Cancer Treatment"
              description="Learn about the best foods to support your recovery and overall health."
              type="article"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Finding Your Support Network"
              description="How to build and maintain a support network during your recovery."
              type="article"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="Gentle Exercise Routines"
              description="Safe, low-impact exercises designed specifically for cancer survivors."
              type="video"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Mindfulness Meditation"
              description="Guided meditation sessions to help manage stress and anxiety."
              type="video"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="guides">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              title="Managing Treatment Side Effects"
              description="Comprehensive guide to managing common side effects from cancer treatments."
              type="guide"
              image="/placeholder.svg?height=150&width=300"
            />
            <ResourceCard
              title="Sleep Improvement Techniques"
              description="Evidence-based strategies to improve sleep quality during recovery."
              type="guide"
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="community">
          <div className="text-center py-12 text-slate-500">
            <p>Community resources will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  type: "article" | "video" | "guide"
  image: string
}

function ResourceCard({ title, description, type, image }: ResourceCardProps) {
  const getIcon = () => {
    switch (type) {
      case "article":
        return <BookOpen className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "guide":
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800"
      case "video":
        return "bg-rose-100 text-rose-800"
      case "guide":
        return "bg-amber-100 text-amber-800"
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()}`}>
          {type}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start gap-2">
          <div className={`p-2 rounded-full ${getTypeColor()} bg-opacity-20`}>{getIcon()}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <a href="#">
            View Resource
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
