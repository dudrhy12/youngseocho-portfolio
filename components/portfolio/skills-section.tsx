import { Braces, Cloud, Container, Database, GitBranch, HardDrive, Layers3, MonitorCog, Server, Terminal } from 'lucide-react'
import { skills } from '@/lib/portfolio-data'
import { Section } from './section'
import { Tag } from './tag'

const skillIcons = { Java: Braces, 'Spring Boot': Layers3, Gradle: GitBranch, MySQL: Database, SQL: HardDrive, Python: Terminal, Streamlit: MonitorCog, AWS: Cloud, Linux: Server, Docker: Container, Jenkins: GitBranch } as const

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="사용 기술">
      <dl className="flex flex-col divide-y divide-border rounded-xl border border-border">
        {skills.map((group) => <div key={group.category} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-6"><dt className="w-20 shrink-0 text-sm font-semibold text-foreground">{group.category}</dt><dd><ul className="flex flex-wrap gap-1.5">{group.items.map((item) => { const Icon = skillIcons[item as keyof typeof skillIcons] ?? Braces; return <li key={item}><Tag><Icon className="mr-1.5 inline size-3.5" aria-hidden="true" />{item}</Tag></li> })}</ul></dd></div>)}
      </dl>
    </Section>
  )
}
