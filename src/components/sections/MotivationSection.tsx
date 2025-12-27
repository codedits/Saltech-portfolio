import { Quote } from "lucide-react";

export function MotivationSection() {
  return (
    <section className="py-16 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">MOTIVATION</h2>
            <span className="text-xs uppercase tracking-widest text-background/60">THE JOURNEY OF CREATIVE INSPIRATION</span>
          </div>

          <div className="relative">
            <span className="text-xs uppercase tracking-widest text-background/60 mb-8 block">[ MY MOTO ]</span>
            <Quote className="w-16 h-16 text-accent/30 mb-6" />
            <p className="text-lg md:text-xl font-body leading-relaxed mb-8">
              Creativity is the heartbeat of design. Every pixel you place, and concept you bring to life is a testament to your unique vision. <span className="text-accent">"Remember, each challenge is an opportunity to innovate, each setback is a step toward your breakthrough."</span>
            </p>
            <p className="text-background/70 font-body leading-relaxed mb-8">
              Embrace the process, trust your instincts and let your passion drive you forward. Your designs have the power to inspire and leave a <span className="text-accent">"Lasting impact on the World"</span>
            </p>
            <div className="border-l-4 border-accent pl-6">
              <p className="text-lg italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <span className="text-background/60 text-sm mt-2 block">— Steve Jobs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
