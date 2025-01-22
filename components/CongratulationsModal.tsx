import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface CongratulationsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CongratulationsModal({ isOpen, onClose }: CongratulationsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            Congratulations!
          </DialogTitle>
          <DialogDescription className="text-center">
            You've successfully joined the waitlist for The AI Dev Club.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center mt-6">
          <p className="mb-4">
            We're excited to have you on board! We'll keep you updated on our launch and upcoming AI learning
            opportunities.
          </p>
          <Button onClick={onClose} className="bg-primary text-white hover:bg-primary/90">
            Got it, thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

