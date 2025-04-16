import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Search, Share, ThumbsUp, Users, MapPin } from "lucide-react"
import Image from "next/image"

export default function CommunityPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Community</h1>
          <p className="text-slate-600 mt-1">Connect with other cancer survivors and share your journey</p>
        </div>
        <Button>Create Post</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
        <Input placeholder="Search community posts..." className="pl-10" />
      </div>

      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <CommunityPosts />
            </div>
            <div className="space-y-6">
              <YourGroups />
              <UpcomingEvents />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SupportGroup
              name="Breast Cancer Survivors"
              members={42}
              posts={128}
              image="/placeholder.svg?height=100&width=320"
              description="A supportive community for breast cancer survivors to share experiences and resources."
            />
            <SupportGroup
              name="Young Adult Survivors"
              members={36}
              posts={95}
              image="/placeholder.svg?height=100&width=320"
              description="For cancer survivors in their 20s and 30s navigating survivorship and life after treatment."
            />
            <SupportGroup
              name="Caregivers Circle"
              members={58}
              posts={210}
              image="/placeholder.svg?height=100&width=320"
              description="A space for family members and caregivers to find support and share advice."
            />
            <SupportGroup
              name="Nutrition & Wellness"
              members={64}
              posts={175}
              image="/placeholder.svg?height=100&width=320"
              description="Focused on healthy eating, exercise, and wellness practices during and after cancer treatment."
            />
            <SupportGroup
              name="Treatment Side Effects"
              members={51}
              posts={143}
              image="/placeholder.svg?height=100&width=320"
              description="Discussing management strategies for treatment side effects and long-term symptoms."
            />
            <SupportGroup
              name="Returning to Work"
              members={29}
              posts={87}
              image="/placeholder.svg?height=100&width=320"
              description="Support for those navigating the return to work after cancer treatment."
            />
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CommunityEvent
              title="Virtual Support Group Meeting"
              date="May 10, 2025"
              time="7:00 PM - 8:30 PM"
              attendees={18}
              location="Zoom (Online)"
              description="Join our weekly support group meeting where we'll discuss coping strategies and share experiences."
            />
            <CommunityEvent
              title="Nutrition Workshop"
              date="May 18, 2025"
              time="2:00 PM - 4:00 PM"
              attendees={24}
              location="Memorial Cancer Center, Room 204"
              description="Learn about nutrition strategies to support your recovery with our expert dietitian."
            />
            <CommunityEvent
              title="Gentle Yoga Class"
              date="May 22, 2025"
              time="10:00 AM - 11:00 AM"
              attendees={15}
              location="Wellness Center"
              description="A gentle yoga class designed specifically for cancer survivors at all fitness levels."
            />
            <CommunityEvent
              title="Art Therapy Workshop"
              date="May 25, 2025"
              time="1:00 PM - 3:00 PM"
              attendees={12}
              location="Community Arts Center"
              description="Express yourself through art in this therapeutic workshop led by a certified art therapist."
            />
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CommunityMember
              name="Jennifer L."
              type="Breast Cancer Survivor"
              years={3}
              bio="Passionate about helping others navigate their cancer journey. Love gardening and hiking."
            />
            <CommunityMember
              name="Michael R."
              type="Prostate Cancer Survivor"
              years={5}
              bio="Retired teacher, now focused on wellness and volunteering with cancer support organizations."
            />
            <CommunityMember
              name="Sarah T."
              type="Lymphoma Survivor"
              years={2}
              bio="Young professional balancing career and recovery. Advocate for young adult cancer survivors."
            />
            <CommunityMember
              name="David K."
              type="Colon Cancer Survivor"
              years={4}
              bio="Nutrition enthusiast who believes in the power of healthy eating during recovery."
            />
            <CommunityMember
              name="Maria G."
              type="Caregiver"
              years={3}
              bio="Supported my mother through her cancer journey. Here to share experiences and support others."
            />
            <CommunityMember
              name="Robert J."
              type="Lung Cancer Survivor"
              years={1}
              bio="Recently completed treatment and navigating the new normal. Enjoy photography and nature."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CommunityPosts() {
  const posts = [
    {
      id: 1,
      author: "Jennifer L.",
      authorType: "Breast Cancer Survivor",
      time: "2 hours ago",
      content:
        "Just had my 3-year checkup and I'm still cancer-free! It's been a challenging journey, but I'm grateful for every day and for this supportive community. For those still in treatment, stay strong - there is light at the end of the tunnel. ❤️",
      likes: 42,
      comments: 15,
    },
    {
      id: 2,
      author: "Michael R.",
      authorType: "Prostate Cancer Survivor",
      time: "Yesterday",
      content:
        "I've been experiencing some fatigue lately, even though I'm 5 years post-treatment. Anyone else deal with long-term fatigue? What strategies have helped you manage it?",
      likes: 28,
      comments: 23,
    },
    {
      id: 3,
      author: "Sarah T.",
      authorType: "Lymphoma Survivor",
      time: "3 days ago",
      content:
        "I just completed my first 5K walk since finishing treatment! It wasn't easy, but it felt amazing to accomplish this milestone. Small steps lead to big victories!",
      image: "/placeholder.svg?height=300&width=600",
      likes: 56,
      comments: 18,
    },
  ]

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <Avatar>
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-slate-500">{post.authorType}</div>
                <div className="text-xs text-slate-400">{post.time}</div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-slate-700">{post.content}</p>
              {post.image && (
                <div className="relative h-64 w-full rounded-md overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
                </div>
              )}
              <div className="flex justify-between pt-4 border-t">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function YourGroups() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Groups</CardTitle>
        <CardDescription>Support groups you've joined</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-teal-700" />
            </div>
            <div className="text-sm font-medium">Breast Cancer Survivors</div>
          </div>
          <div className="text-xs text-slate-500">42 members</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-rose-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-rose-700" />
            </div>
            <div className="text-sm font-medium">Young Adult Survivors</div>
          </div>
          <div className="text-xs text-slate-500">36 members</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-full">
              <Users className="h-4 w-4 text-amber-700" />
            </div>
            <div className="text-sm font-medium">Nutrition & Wellness</div>
          </div>
          <div className="text-xs text-slate-500">64 members</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Groups
        </Button>
      </CardFooter>
    </Card>
  )
}

function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>Events you might be interested in</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-slate-100 rounded-md p-2 text-center min-w-16">
            <div className="text-sm font-medium text-slate-500">MAY</div>
            <div className="text-xl font-bold text-slate-800">10</div>
          </div>
          <div>
            <h3 className="font-medium text-sm">Virtual Support Group</h3>
            <p className="text-xs text-slate-500">7:00 PM - 8:30 PM</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-slate-100 rounded-md p-2 text-center min-w-16">
            <div className="text-sm font-medium text-slate-500">MAY</div>
            <div className="text-xl font-bold text-slate-800">18</div>
          </div>
          <div>
            <h3 className="font-medium text-sm">Nutrition Workshop</h3>
            <p className="text-xs text-slate-500">2:00 PM - 4:00 PM</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-slate-100 rounded-md p-2 text-center min-w-16">
            <div className="text-sm font-medium text-slate-500">MAY</div>
            <div className="text-xl font-bold text-slate-800">22</div>
          </div>
          <div>
            <h3 className="font-medium text-sm">Gentle Yoga Class</h3>
            <p className="text-xs text-slate-500">10:00 AM - 11:00 AM</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Events
        </Button>
      </CardFooter>
    </Card>
  )
}

interface SupportGroupProps {
  name: string
  members: number
  posts: number
  image: string
  description: string
}

function SupportGroup({ name, members, posts, image, description }: SupportGroupProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>{members} members</span>
          <span>{posts} posts</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Group</Button>
        <Button>Join</Button>
      </CardFooter>
    </Card>
  )
}

interface CommunityEventProps {
  title: string
  date: string
  time: string
  attendees: number
  location: string
  description: string
}

function CommunityEvent({ title, date, time, attendees, location, description }: CommunityEventProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <div className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full">
            {attendees} attending
          </div>
        </div>
        <CardDescription>
          {date} • {time}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">More Info</Button>
        <Button>RSVP</Button>
      </CardFooter>
    </Card>
  )
}

interface CommunityMemberProps {
  name: string
  type: string
  years: number
  bio: string
}

function CommunityMember({ name, type, years, bio }: CommunityMemberProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarFallback className="text-xl">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="text-sm text-slate-500">{type}</div>
          <div className="text-xs text-teal-600 font-medium">
            {years} {years === 1 ? "year" : "years"}
          </div>
        </div>
        <p className="text-sm text-slate-600">{bio}</p>
        <div className="flex justify-between mt-4">
          <Button variant="outline" size="sm">
            View Profile
          </Button>
          <Button size="sm">Connect</Button>
        </div>
      </CardContent>
    </Card>
  )
}
