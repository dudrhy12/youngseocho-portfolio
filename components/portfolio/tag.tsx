import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-foreground">
      {children}
    </span>
  )
}
