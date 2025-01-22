import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function TargetAudience() {
  const targetGroups = [
    "You're a developer seeking to upskill for career advancement.",
    "You're a student or freelancer needing job-ready AI expertise.",
    "You need affordable, high-quality education.",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The AI Dev Club is for you if...</h2>
        <ul className="space-y-6 mb-12 max-w-2xl mx-auto">
          {targetGroups.map((group, index) => (
            <li key={index} className="flex items-center bg-muted p-4 rounded-lg shadow-sm">
              <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
              <span className="text-lg">{group}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Join the Waitlist
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Contact Us for Partnerships
          </Button>
        </div>
      </div>
    </section>
  )
}

