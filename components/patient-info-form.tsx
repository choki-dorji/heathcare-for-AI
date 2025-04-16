"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export function PatientInfoForm() {
  const [currentTab, setCurrentTab] = useState("personal")

  const nextTab = () => {
    if (currentTab === "personal") setCurrentTab("medical")
    else if (currentTab === "medical") setCurrentTab("symptoms")
    else if (currentTab === "symptoms") setCurrentTab("lifestyle")
  }

  const prevTab = () => {
    if (currentTab === "lifestyle") setCurrentTab("symptoms")
    else if (currentTab === "symptoms") setCurrentTab("medical")
    else if (currentTab === "medical") setCurrentTab("personal")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Form submitted! In a real app, this would generate your care plan.")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="medical">Medical History</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="Enter your age" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="female" className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="non-binary" id="non-binary" />
                <Label htmlFor="non-binary">Non-binary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prefer-not" id="prefer-not" />
                <Label htmlFor="prefer-not">Prefer not to say</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergency-contact">Emergency Contact</Label>
            <Input id="emergency-contact" placeholder="Name and phone number" />
          </div>

          <div className="flex justify-end">
            <Button type="button" onClick={nextTab}>
              Next: Medical History
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="medical" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="cancer-type">Cancer Type</Label>
            <Select>
              <SelectTrigger id="cancer-type">
                <SelectValue placeholder="Select cancer type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="breast">Breast Cancer</SelectItem>
                <SelectItem value="lung">Lung Cancer</SelectItem>
                <SelectItem value="colon">Colorectal Cancer</SelectItem>
                <SelectItem value="prostate">Prostate Cancer</SelectItem>
                <SelectItem value="melanoma">Melanoma</SelectItem>
                <SelectItem value="lymphoma">Lymphoma</SelectItem>
                <SelectItem value="leukemia">Leukemia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="diagnosis-date">Date of Diagnosis</Label>
            <Input id="diagnosis-date" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="treatment-stage">Treatment Stage</Label>
            <Select>
              <SelectTrigger id="treatment-stage">
                <SelectValue placeholder="Select treatment stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newly-diagnosed">Newly Diagnosed</SelectItem>
                <SelectItem value="in-treatment">Currently in Treatment</SelectItem>
                <SelectItem value="post-treatment">Post-Treatment (0-6 months)</SelectItem>
                <SelectItem value="survivor-early">Early Survivorship (6 months - 2 years)</SelectItem>
                <SelectItem value="survivor-long">Long-term Survivorship (2+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Treatments Received (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="surgery" />
                <Label htmlFor="surgery">Surgery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="chemotherapy" />
                <Label htmlFor="chemotherapy">Chemotherapy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="radiation" />
                <Label htmlFor="radiation">Radiation Therapy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hormone" />
                <Label htmlFor="hormone">Hormone Therapy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="immunotherapy" />
                <Label htmlFor="immunotherapy">Immunotherapy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="targeted" />
                <Label htmlFor="targeted">Targeted Therapy</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medications">Current Medications</Label>
            <Textarea id="medications" placeholder="List all medications you are currently taking" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="allergies">Allergies</Label>
            <Textarea id="allergies" placeholder="List any allergies you have" />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevTab}>
              Previous
            </Button>
            <Button type="button" onClick={nextTab}>
              Next: Symptoms
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <div className="space-y-2">
            <Label>Current Symptoms (Select all that apply)</Label>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fatigue" />
                    <Label htmlFor="fatigue">Fatigue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pain" />
                    <Label htmlFor="pain">Pain</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nausea" />
                    <Label htmlFor="nausea">Nausea/Vomiting</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="appetite" />
                    <Label htmlFor="appetite">Loss of Appetite</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sleep" />
                    <Label htmlFor="sleep">Sleep Disturbances</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anxiety" />
                    <Label htmlFor="anxiety">Anxiety/Depression</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="memory" />
                    <Label htmlFor="memory">Memory/Concentration Issues</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="neuropathy" />
                    <Label htmlFor="neuropathy">Neuropathy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lymphedema" />
                    <Label htmlFor="lymphedema">Lymphedema</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="breathing" />
                    <Label htmlFor="breathing">Shortness of Breath</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptom-details">Symptom Details</Label>
            <Textarea
              id="symptom-details"
              placeholder="Please provide details about your symptoms (severity, frequency, triggers, etc.)"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pain-locations">Pain Locations (if applicable)</Label>
            <Textarea id="pain-locations" placeholder="Describe where you experience pain" />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevTab}>
              Previous
            </Button>
            <Button type="button" onClick={nextTab}>
              Next: Lifestyle
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="lifestyle" className="space-y-6">
          <div className="space-y-2">
            <Label>Physical Activity Level</Label>
            <RadioGroup defaultValue="light">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sedentary" id="sedentary" />
                <Label htmlFor="sedentary">Sedentary (Little to no exercise)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">Light (Light exercise 1-3 days/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate">Moderate (Moderate exercise 3-5 days/week)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active">Active (Intense exercise 6-7 days/week)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Dietary Preferences</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select dietary preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="omnivore">Omnivore (Meat and plants)</SelectItem>
                <SelectItem value="pescatarian">Pescatarian (Fish and plants)</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="keto">Ketogenic</SelectItem>
                <SelectItem value="paleo">Paleo</SelectItem>
                <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sleep Quality</Label>
            <RadioGroup defaultValue="fair">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="sleep-poor" />
                <Label htmlFor="sleep-poor">Poor (Difficulty falling/staying asleep)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="sleep-fair" />
                <Label htmlFor="sleep-fair">Fair (Occasional sleep issues)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="sleep-good" />
                <Label htmlFor="sleep-good">Good (Generally sleep well)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="sleep-excellent" />
                <Label htmlFor="sleep-excellent">Excellent (Consistently sleep well)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Wellness Goals (Select all that apply)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-energy" />
                <Label htmlFor="goal-energy">Increase energy levels</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-strength" />
                <Label htmlFor="goal-strength">Rebuild physical strength</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-nutrition" />
                <Label htmlFor="goal-nutrition">Improve nutrition</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-stress" />
                <Label htmlFor="goal-stress">Manage stress and anxiety</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-sleep" />
                <Label htmlFor="goal-sleep">Improve sleep quality</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="goal-social" />
                <Label htmlFor="goal-social">Enhance social connections</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-info">Additional Information</Label>
            <Textarea
              id="additional-info"
              placeholder="Please share any additional information that might help us create your personalized care plan"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={prevTab}>
              Previous
            </Button>
            <Button type="submit">Generate Care Plan</Button>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  )
}
