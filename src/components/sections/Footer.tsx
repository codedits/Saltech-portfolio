import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-body text-sm">© 2024 SALTECH. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">About</a>
            <Link href="/projects" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Work</Link>
            <a href="#services" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Services</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground font-body text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
