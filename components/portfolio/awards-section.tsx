import { Award, BadgeCheck } from 'lucide-react'
import { awards, certifications } from '@/lib/portfolio-data'
import { Section } from './section'

export function AwardsSection() {
  return (
    <>
      <Section id="awards" eyebrow="Awards" title="수상">
        <ul className="flex flex-col divide-y divide-border">
          {awards.map((award) => (
            <li key={award.title} className="flex items-baseline justify-between gap-4 py-3 first:pt-0">
              <div className="flex items-center gap-3">
                <Award className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-foreground">{award.title}</span>
                  <span className="text-sm text-muted-foreground">{award.org}</span>
                </div>
              </div>
              <span className="shrink-0 font-mono text-sm text-muted-foreground tabular-nums">{award.date}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="certifications" eyebrow="Certifications" title="자격증">
        <ul className="flex flex-col divide-y divide-border">
          {certifications.map((cert) => (
            <li key={cert.title} className="flex items-center justify-between gap-4 py-3 first:pt-0">
              <div className="flex items-center gap-3">
                <BadgeCheck className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="font-semibold text-foreground">{cert.title}</span>
              </div>
              <span className="shrink-0 font-mono text-sm text-muted-foreground tabular-nums">{cert.date}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
