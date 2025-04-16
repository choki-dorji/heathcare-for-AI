"use client"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export function SymptomsForm() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600">
        Please rate the severity of any symptoms or side effects you're currently experiencing. This will help us tailor
        your care plan to address your specific needs.
      </p>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Fatigue</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>None</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <Slider defaultValue={[2]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Pain</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>None</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <Slider defaultValue={[1]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Nausea</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>None</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <Slider defaultValue={[0]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Anxiety/Depression</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>None</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <Slider defaultValue={[3]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Sleep Disturbances</Label>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>None</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <Slider defaultValue={[4]} max={10} step={1} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="otherSymptoms">Other Symptoms or Side Effects</Label>
          <Textarea
            id="otherSymptoms"
            placeholder="Please describe any other symptoms or side effects you're experiencing"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="concernsGoals">Specific Concerns or Goals</Label>
          <Textarea
            id="concernsGoals"
            placeholder="What specific concerns would you like your care plan to address?"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  )
}
