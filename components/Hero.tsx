import Image from "next/image"
import EmailForm from "./EmailForm"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Affordable AI Education for a Smarter Tomorrow
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Empowering developers locally and globally with accessible AI learning for just $3/month.
            </p>
            <EmailForm />
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 rounded-full blur-3xl"></div>
            <Image
              src="/images/hero_image.png"
              alt="Developers collaborating"
              width={800}
              height={800}
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


