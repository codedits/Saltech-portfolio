import { Button } from "@/components/ui/button";

export function TeamsSection() {
  return (
    <section id="teams" className="py-16 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-background">Join the Team</h2>
          <p className="text-background/80 mt-4 font-body max-w-2xl">We're always looking for curious, motivated people who love how things work. You don't have to be an expert — passion and a willingness to learn matter most.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Curiosity & Attitude</h3>
            <p className="text-background/80 text-sm">You should be naturally curious and enjoy learning how things work — that beats credentials alone.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Basic Programming</h3>
            <p className="text-background/80 text-sm">Know the basics (HTML/CSS/JavaScript). You don't need to be a senior engineer to contribute meaningfully.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Design Eye</h3>
            <p className="text-background/80 text-sm">A good sense of design and UX is a huge plus — visual sensibility helps across roles.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Graphic Design Experience</h3>
            <p className="text-background/80 text-sm">Experience with graphic tools (Figma, Photoshop, Illustrator) is valued but not mandatory.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Git & Collaboration</h3>
            <p className="text-background/80 text-sm">Comfort with Git and basic version control workflows makes collaboration much easier.</p>
          </div>

          <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
            <h3 className="font-display font-bold text-xl mb-2 text-background">Show Your Work</h3>
            <p className="text-background/80 text-sm">Share projects — they don't need to be huge. Small, real projects show problem-solving and initiative.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-background/80 mb-6">Ready to join us or want to learn more?</p>
          <Button asChild size="lg" variant="hero" className="bg-accent text-white rounded-full px-8 py-4 font-display font-bold">
            <a href="mailto:talhairfan1947@gmail.com">Apply / Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
