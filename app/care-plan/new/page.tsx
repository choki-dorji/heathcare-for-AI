import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PatientInfoForm } from "@/components/patient-info-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewCarePlan() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/care-plan">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to care plans</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-slate-800">Create New Care Plan</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tell Us About Yourself</CardTitle>
          <CardDescription>
            Please provide information about your health, symptoms, and goals so we can create a personalized care plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PatientInfoForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t pt-6">
          <p className="text-sm text-slate-500">
            Your privacy is important to us. All information provided will be used solely for generating your
            personalized care plan.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
