import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string
  title: string
  eyebrow: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-border py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
        <header className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
