'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Mail } from 'lucide-react'
import { highlights, profile } from '@/lib/portfolio-data'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="top" aria-label="소개" className="py-12 md:py-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center md:gap-12">
        <div className="relative aspect-[3/4] w-36 shrink-0 overflow-hidden rounded-xl bg-muted md:w-48">
          <Image
            src={profile.photo || '/placeholder.svg'}
            alt={`${profile.name} 프로필 사진`}
            fill
            priority
            sizes="(min-width: 768px) 192px, 144px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm text-primary">{profile.role}</p>
            <h1 className="text-pretty text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              {profile.headline}
            </h1>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {profile.intro[0]}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label="연락처 및 링크">
            <li className="relative">
              <button
                type="button"
                onClick={copyEmail}
                aria-describedby="email-copy-status"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Mail className="size-4 text-muted-foreground" aria-hidden="true" />
                {profile.email}
              </button>
              <span
                id="email-copy-status"
                role="status"
                aria-live="polite"
                className={`absolute left-0 top-full z-10 mt-2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-sm transition-opacity ${copied ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
              >
                이메일이 복사되었습니다.
              </span>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                GitHub
                <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Tech Blog
                <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-xl border border-border md:mt-14 md:grid-cols-[1fr_1fr_1fr_1.25fr]">
        {highlights.map((item, index) => (
          <div
            key={item.label}
            className={[
              'flex flex-col gap-1 p-5',
              index % 2 === 1 ? 'border-l border-border' : '',
              index >= 2 ? 'border-t border-border md:border-t-0' : '',
              index === 2 ? 'md:border-l' : '',
            ].join(' ')}
          >
            <dt className="text-xs font-medium text-muted-foreground">{item.label}</dt>
            <dd className="text-lg font-bold text-foreground md:text-xl">{item.value}</dd>
            <dd className="text-sm text-muted-foreground">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
