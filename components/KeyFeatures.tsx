import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, BookOpen, Users, Globe } from "lucide-react"

export default function KeyFeatures() {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Affordable AI Learning",
      description: "$3/month for high-quality AI education.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Hands-On Projects",
      description: "Real-world applications to build your portfolio.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Interactive Community",
      description: "Forums, challenges, and peer support.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Localized Solutions",
      description: "Payment methods and content tailored for your market.",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes Us Different?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Join the Waitlist
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Explore Our Platform
          </Button>
        </div>
      </div>
    </section>
  )
}

