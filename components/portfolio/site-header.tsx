import { profile } from '@/lib/portfolio-data'

const navItems = [
  { href: '#experience', label: '경력' },
  { href: '#projects', label: '프로젝트' },
  { href: '#skills', label: '기술' },
  { href: '#education', label: '학력' },
  { href: '#activities', label: '활동' },
  { href: '#awards', label: '수상·자격' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2 font-bold text-foreground">
          {profile.name}
        </a>
        <nav aria-label="섹션 이동" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
