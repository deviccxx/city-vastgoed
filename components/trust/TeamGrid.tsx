import { Image } from "@/components/ui/Img";
import { team, type TeamMember } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

export function TeamCard({ member: m, size = "md" }: { member: TeamMember; size?: "md" | "lg" }) {
  return (
    <article>
      <div className={cn("img-zoom relative overflow-hidden bg-ink-2", size === "lg" ? "aspect-[4/5]" : "aspect-[4/5]")}>
        <Image src={m.photo} alt={m.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
        {m.contactPerson && (
          <span className="absolute left-4 top-4 bg-gold px-2.5 py-1 text-[0.5625rem] uppercase tracking-[0.16em] text-ink">
            Uw aanspreekpunt
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-2xl">{m.name}</h3>
      <p className="eyebrow mt-1">{m.role}</p>
      <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">{m.bio}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {m.background.map((b) => (
          <li key={b} className="border border-stone-2 px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.12em] text-ink/70">
            {b}
          </li>
        ))}
      </ul>
      {(m.phone || m.email) && (
        <div className="mt-5 flex flex-col gap-1 text-[0.8125rem]">
          {m.phone && (
            <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="link-gold w-fit">
              {m.phone}
            </a>
          )}
          {m.email && (
            <a href={`mailto:${m.email}`} className="link-gold w-fit">
              {m.email}
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function TeamGrid({ limit }: { limit?: number }) {
  const members = limit ? team.slice(0, limit) : team;
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {members.map((m) => (
        <TeamCard key={m.name} member={m} />
      ))}
    </div>
  );
}
