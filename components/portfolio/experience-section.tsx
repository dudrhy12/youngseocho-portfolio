import { experience } from '@/lib/portfolio-data'
import { Section } from './section'
import { Tag } from './tag'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="경력">
      <ol className="flex flex-col gap-10">
        {experience.map((job) => (
          <li key={job.company} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                <p className="font-medium text-muted-foreground">{job.role}</p>
              </div>
              <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground tabular-nums">
                {job.period}
                <span className="rounded bg-accent px-1.5 py-0.5 font-sans text-xs font-semibold text-accent-foreground">
                  {job.duration}
                </span>
              </p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {job.tasks.map((task) => (
                <li key={task} className="flex gap-3 leading-relaxed text-foreground">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-pretty">{task}</span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-1.5" aria-label="사용 기술">
              {job.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
