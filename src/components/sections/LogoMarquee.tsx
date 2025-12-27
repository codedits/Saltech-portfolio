import Image from "next/image";

const logos = [
  { src: "/svgs/github.svg", name: "GitHub" },
  { src: "/svgs/githubcopilot.svg", name: "GitHub Copilot" },
  { src: "/svgs/nextjs-svgrepo-com.svg", name: "Next.js" },
  { src: "/svgs/react-svgrepo-com.svg", name: "React" },
  { src: "/svgs/vercel-icon-svgrepo-com.svg", name: "Vercel" },
];

export function LogoMarquee() {
  return (
    <div className="py-12 border-y border-border overflow-hidden bg-secondary/50">
      <div className="animate-marquee flex gap-12 items-center whitespace-nowrap">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center gap-4 mr-8">
            <Image 
              src={logo.src} 
              alt={logo.name} 
              width={40}
              height={40}
              className="object-contain" 
            />
            <span className="text-sm font-display font-bold text-black">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
