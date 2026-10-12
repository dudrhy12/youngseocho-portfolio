'use client'

import { useRef } from 'react'
import { ClipboardList, X } from 'lucide-react'
import { activities } from '@/lib/portfolio-data'
import { Section } from './section'

export function ActivitiesSection() {
  return (
    <Section id="activities" eyebrow="Activities" title="학내외 활동">
      <ul className="flex flex-col divide-y divide-border">
        {activities.map((activity) => (
          <ActivityItem key={activity.title} activity={activity} />
        ))}
      </ul>
    </Section>
  )
}

function ActivityItem({ activity }: { activity: (typeof activities)[number] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <li className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex flex-col gap-0.5">
        <h3 className="font-semibold text-foreground">{activity.title}</h3>
        <p className="text-sm text-muted-foreground">{activity.org}</p>
      </div>
      <div className="flex items-center justify-between gap-4 sm:shrink-0">
        <p className="font-mono text-sm text-muted-foreground tabular-nums">{activity.period}</p>
        <button
          type="button"
          onClick={() => dialogRef.current?.showModal()}
          className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={`${activity.title} 활동 내용 보기`}
        >
          <ClipboardList className="size-4" aria-hidden="true" />
        </button>
      </div>
      <dialog ref={dialogRef} className="m-auto w-[min(90vw,30rem)] rounded-xl border border-border bg-background p-0 text-foreground shadow-xl backdrop:bg-foreground/20">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Activity detail</p>
            <h3 className="mt-1 font-semibold">{activity.title}</h3>
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" aria-label="활동 상세 닫기"><X className="size-4" aria-hidden="true" /></button>
        </div>
        <p className="whitespace-pre-line px-5 py-5 text-sm leading-7 text-muted-foreground">{activity.description}</p>
      </dialog>
    </li>
  )
}
