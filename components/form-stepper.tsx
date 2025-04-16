"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Check } from "lucide-react"

interface Step {
  title: string
  description: string
  content: React.ReactNode
}

interface FormStepperProps {
  steps: Step[]
}

export function FormStepper({ steps }: FormStepperProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // This would normally submit the form data to the backend
    alert("Form submitted! In a real app, this would generate your care plan.")
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-colors ${
              index === currentStep
                ? "bg-teal-50 border border-teal-200"
                : index < currentStep
                  ? "bg-slate-50 border border-slate-200"
                  : "bg-slate-50 border border-slate-200 opacity-70"
            }`}
            onClick={() => index <= currentStep && setCurrentStep(index)}
          >
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                index < currentStep
                  ? "bg-teal-500 text-white"
                  : index === currentStep
                    ? "bg-teal-100 text-teal-800 border border-teal-300"
                    : "bg-slate-100 text-slate-500 border border-slate-300"
              }`}
            >
              {index < currentStep ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <div>
              <h3 className={`font-medium ${index === currentStep ? "text-teal-800" : "text-slate-700"}`}>
                {step.title}
              </h3>
              <p className="text-xs text-slate-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="min-h-[400px]">{steps[currentStep].content}</div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Generate Care Plan</Button>
        )}
      </div>
    </div>
  )
}
