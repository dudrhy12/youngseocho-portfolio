import { education } from '@/lib/portfolio-data'
import { Section } from './section'

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="학력">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-foreground">{education.school}</h3>
          <p className="font-medium text-muted-foreground">{education.major}</p>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm sm:text-right">
          <dt className="text-muted-foreground">{education.status}</dt>
          <dd className="font-mono text-foreground tabular-nums">{education.period}</dd>
          <dt className="text-muted-foreground">학점</dt>
          <dd className="font-mono font-semibold text-foreground tabular-nums">{education.gpa}</dd>
        </dl>
      </div>
    </Section>
  )
}
