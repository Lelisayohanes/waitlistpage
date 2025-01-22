"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-4 px-6 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          The AI Dev Club
        </Link>
        <div className="flex items-center">
          <Button className="bg-primary text-white hover:bg-primary/90 mr-4">Join the Waitlist</Button>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 px-6 md:px-0 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <Link href="#about" className="text-secondary hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#courses" className="text-secondary hover:text-primary transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link href="#community" className="text-secondary hover:text-primary transition-colors">
                Community
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-secondary hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

