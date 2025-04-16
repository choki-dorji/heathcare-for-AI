"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, Clock, MapPin, Plus, User } from 'lucide-react'
import { useState } from "react"

export default function AppointmentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Appointments</h1>
          <p className="text-slate-600 mt-1">Schedule and manage your medical appointments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription>
                Enter the details for your new appointment. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="appointment-type" className="text-right">
                  Type
                </Label>
                <Select>
                  <SelectTrigger id="appointment-type" className="col-span-3">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oncology">Oncology Follow-up</SelectItem>
                    <SelectItem value="primary">Primary Care</SelectItem>
                    <SelectItem value="specialist">Specialist Consultation</SelectItem>
                    <SelectItem value="imaging">Imaging/Scan</SelectItem>
                    <SelectItem value="lab">Lab Work</SelectItem>
                    <SelectItem value="therapy">Physical Therapy</SelectItem>
                    <SelectItem value="mental">Mental Health</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="doctor" className="text-right">
                  Doctor
                </Label>
                <Input id="doctor" placeholder="Doctor's name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input id="location" placeholder="Appointment location" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input id="date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input id="time" type="time" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="notes" className="text-right">
                  Notes
                </Label>
                <Textarea id="notes" placeholder="Additional notes" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Appointment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <AppointmentCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-800">Upcoming Appointments</h2>
            <AppointmentList />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-800">Past Appointments</h2>
            <PastAppointmentList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          initialFocus
          // Highlight dates with appointments
          modifiers={{
            booked: [new Date(2025, 4, 15), new Date(2025, 4, 22), new Date(2025, 4, 28)],
          }}
          modifiersClassNames={{
            booked: "bg-teal-100 text-teal-800 font-medium",
          }}
        />
      </div>
      <div className="md:w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>May 15, 2025</CardTitle>
            <CardDescription>Appointments for this day</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div className="font-medium">Oncology Follow-up</div>
                <div className="text-sm text-teal-600 font-medium">9:30 AM</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <User className="h-4 w-4" />
                <span>Dr. Johnson</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>Memorial Cancer Center, Suite 302</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" />
                <span>Duration: 45 minutes</span>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AppointmentList() {
  const upcomingAppointments = [
    {
      id: 1,
      type: "Oncology Follow-up",
      doctor: "Dr. Johnson",
      location: "Memorial Cancer Center, Suite 302",
      date: "May 15, 2025",
      time: "9:30 AM",
      duration: "45 minutes",
    },
    {
      id: 2,
      type: "Lab Work",
      doctor: "Lab Services",
      location: "Memorial Cancer Center, 1st Floor",
      date: "May 22, 2025",
      time: "8:00 AM",
      duration: "30 minutes",
    },
    {
      id: 3,
      type: "Physical Therapy",
      doctor: "Sarah Williams, PT",
      location: "Wellness Rehabilitation Center",
      date: "May 28, 2025",
      time: "2:00 PM",
      duration: "60 minutes",
    },
  ]

  return (
    <div className="space-y-4">
      {upcomingAppointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-teal-500" />
                  <div className="font-medium text-lg">{appointment.type}</div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <User className="h-4 w-4" />
                  <span>{appointment.doctor}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>{appointment.location}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-teal-600 font-medium">{appointment.date}</div>
                <div className="text-slate-600">{appointment.time}</div>
                <div className="text-slate-600">Duration: {appointment.duration}</div>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function PastAppointmentList() {
  const pastAppointments = [
    {
      id: 1,
      type: "Oncology Follow-up",
      doctor: "Dr. Johnson",
      location: "Memorial Cancer Center, Suite 302",
      date: "April 15, 2025",
      time: "10:00 AM",
      notes: "Discussed treatment progress, blood work results normal.",
    },
    {
      id: 2,
      type: "Imaging",
      doctor: "Radiology Department",
      location: "Memorial Cancer Center, 2nd Floor",
      date: "April 8, 2025",
      time: "9:15 AM",
      notes: "CT scan completed, results sent to Dr. Johnson.",
    },
  ]

  return (
    <div className="space-y-4">
      {pastAppointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-slate-500" />
                  <div className="font-medium text-lg">{appointment.type}</div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <User className="h-4 w-4" />
                  <span>{appointment.doctor}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>{appointment.location}</span>
                </div>
                {appointment.notes && (
                  <div className="text-sm text-slate-600 mt-2 bg-slate-50 p-2 rounded-md">
                    <span className="font-medium">Notes:</span> {appointment.notes}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-slate-600 font-medium">{appointment.date}</div>
                <div className="text-slate-600">{appointment.time}</div>
                <Button variant="outline" size="sm" className="mt-2">
                  View Summary
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
