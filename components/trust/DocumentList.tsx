import Link from "next/link";
import { FileText, Lock, Download } from "lucide-react";
import { documents } from "@/lib/data/trust";
import { cn } from "@/lib/utils";

export function DocumentList({ light = false }: { light?: boolean }) {
  return (
    <ul className={cn("divide-y border-y", light ? "divide-cream/15 border-cream/15" : "divide-stone border-stone-2")}>
      {documents.map((d) => (
        <li key={d.name} className="flex items-center gap-4 py-4">
          <FileText className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.25} />
          <div className="min-w-0 flex-1">
            <p className="text-[0.9375rem]">{d.name}</p>
            <p className={cn("text-[0.6875rem] uppercase tracking-[0.12em]", light ? "text-cream/50" : "text-muted")}>
              {d.type} · {d.date.replace("-", "/")}
            </p>
          </div>
          {d.locked ? (
            <Link
              href="/inloggen/#registreren"
              className={cn("flex items-center gap-2 text-[0.625rem] uppercase tracking-[0.14em]", light ? "text-cream/60" : "text-muted")}
            >
              <Lock className="h-3.5 w-3.5" strokeWidth={1.5} /> Na registratie
            </Link>
          ) : (
            <span className="flex items-center gap-2 text-[0.625rem] uppercase tracking-[0.14em] text-gold">
              <Download className="h-3.5 w-3.5" strokeWidth={1.5} /> Download
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
