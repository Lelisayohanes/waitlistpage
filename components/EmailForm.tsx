"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { CongratulationsModal } from "./CongratulationsModal"

export default function EmailForm() {
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsModalOpen(true)
    setEmail("")
    toast({
      title: "Success!",
      description: "You've been added to the waitlist.",
    })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow text-black rounded-full w-full"
        />
        <Button type="submit" size="lg" className="bg-white text-black  hover:bg-gray-100 rounded-full">
          Join the Waitlist
        </Button>
      </form>
      <CongratulationsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
