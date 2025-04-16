"use client"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export function LifestyleForm() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600">
        Please share information about your current lifestyle and wellness goals. This will help us create a care plan
        that aligns with your daily routine and aspirations.
      </p>

      <div className="space-y-6">
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

        <div className="space-y-4">
          <Label>Stress Level (Average)</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
            <Slider defaultValue={[5]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Sleep Quality</Label>
          <RadioGroup defaultValue="fair">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="poor" id="poor" />
              <Label htmlFor="poor">Poor (Difficulty falling/staying asleep)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fair" id="fair" />
              <Label htmlFor="fair">Fair (Occasional sleep issues)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="good" id="good" />
              <Label htmlFor="good">Good (Generally sleep well)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="excellent" id="excellent" />
              <Label htmlFor="excellent">Excellent (Consistently sleep well)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="supportSystem">Support System</Label>
          <Select>
            <SelectTrigger id="supportSystem">
              <SelectValue placeholder="Select support system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strong">Strong (Family and friends actively involved)</SelectItem>
              <SelectItem value="moderate">Moderate (Some support available)</SelectItem>
              <SelectItem value="limited">Limited (Minimal support network)</SelectItem>
              <SelectItem value="none">None (No support system)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals">Wellness Goals</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="energy" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="energy">Increase energy levels</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="strength" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="strength">Rebuild physical strength</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="nutrition" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="nutrition">Improve nutrition</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="stress" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="stress">Manage stress and anxiety</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sleep" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="sleep">Improve sleep quality</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="social" className="rounded text-teal-500 focus:ring-teal-500" />
              <Label htmlFor="social">Enhance social connections</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            placeholder="Please share any additional information that might help us create your personalized care plan"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  )
}
