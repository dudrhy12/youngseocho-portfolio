'use client'

import Image from 'next/image'
import { ArrowUpRight, Code2, X } from 'lucide-react'
import { useRef } from 'react'
import { projects } from '@/lib/portfolio-data'
import { Section } from './section'

export function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Projects" title="프로젝트">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </ul>
    </Section>
  )
}

function IssueTreeDetail() {
  const images = [
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3A47dc3de1-d013-4691-8530-98884f046080%3Aimage.png?table=block&id=3e2fa5ae-fa63-8098-ae34-ca5b3b952748&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3Ad4cdcdaf-eedf-4a88-8611-3cd0805cfae9%3Aimage.png?table=block&id=3e2fa5ae-fa63-807b-9eff-d1a0a59022fb&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3A9166217e-1453-4762-bbb2-8629c9124ee7%3Aimage.png?table=block&id=3e2fa5ae-fa63-8061-9ade-c85ab4131206&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3A6e02d811-050c-4c83-939c-ea4ba6d4e3a6%3Aimage.png?table=block&id=3e2fa5ae-fa63-809d-98da-d42d70306267&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3Acf3f75aa-51eb-4c0f-bd2c-c0d5f1a19e0e%3Aimage.png?table=block&id=3e2fa5ae-fa63-80d1-ad95-ecbfef9ad8b5&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3Addcb16fd-fc00-437f-8cd8-a0a2e79d5417%3Aimage.png?table=block&id=3e2fa5ae-fa63-80d5-a69f-c76aaf1d0dfb&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3A96d45219-da11-4b60-8216-6df14325598f%3Aimage.png?table=block&id=3e2fa5ae-fa63-8086-bfbf-fb8c075163dc&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3Acff88254-fe56-47bd-9d1b-74b754bc4887%3Aimage.png?table=block&id=3e2fa5ae-fa63-80b2-beef-eed001b04133&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3Aa8e4a2c0-8c2b-471b-9222-73078c5d5723%3Aimage.png?table=block&id=3e2fa5ae-fa63-804b-a0dd-cddbcf1adcc7&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=640&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
    'https://jewel-eucalyptus-c6e.notion.site/image/attachment%3A102ac4a0-b29c-451f-9182-f9faaf240380%3Aimage.png?table=block&id=3e2fa5ae-fa63-80db-abc8-c10ea84a5811&spaceId=3e7136fd-3258-42a5-9b7b-9ddf099cb0dd&width=830&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl',
  ]
  return <article className="mx-auto flex max-w-5xl flex-col gap-12 px-5 py-8 text-base sm:px-12 sm:py-12 sm:text-lg">
    <header className="flex flex-col gap-7">
      <img src={images[0]} alt="Issue Tree 프로젝트 소개" className="w-full rounded-lg" />
      <h2 className="text-2xl font-black leading-tight sm:text-4xl">사내 개발 이슈와 해결 과정을 효율적으로 문서화하고 검색할 수 있는 ‘ISSUE TREE’ 서비스</h2>
      <blockquote className="border-l-2 border-foreground/20 pl-4 text-base leading-8 text-muted-foreground sm:text-lg">&quot;Issue Tree&quot;는 개발 과정에서 발생하는 이슈와 해결 과정을 체계적으로 기록하고 연결하여, 필요한 정보를 빠르게 검색하고 활용할 수 있도록 지원하는 개발 이슈 관리 서비스입니다.</blockquote>
    </header>
    <CheckMateSection title="팀 소개"><InfoRow label="배경" value="숙명여자대학교 SW중심대학사업단 AWS Winter Camp" /><InfoRow label="구성" value="Front-end developer 3인, Back-end Develper 2인" /><InfoRow label="기간" value="2025.02 - 2025. 02" /></CheckMateSection>
    <CheckMateSection title="서비스 성과"><Bullet>AWS Winter Camp 1st Award 수상</Bullet></CheckMateSection>
    <CheckMateSection title="서비스 플로우">
      <figure><img src={images[1]} alt="Issue Tree Slack 이슈 등록 플로우" className="w-full rounded-lg object-contain" /></figure>
      <ol className="ml-6 list-decimal space-y-2"><li>Slack의 이슈 관련 채널에서 발생한 이슈(스택, 버전, 이슈)를 등록한다.</li><li>이슈에 대해 스레드의 댓글로 논의한다.</li><li>발생한 이슈가 해결되면 워크플로우의 해결 버튼을 클릭한다.</li><li>해결된 스레드의 이슈 정보와 댓글로 나눈 정보들을 ES에 저장한다.</li></ol>
      <figure><img src={images[2]} alt="Issue Tree 이슈 검색" className="w-full rounded-lg object-contain" /></figure>
      <ol className="ml-6 list-decimal space-y-2"><li>Streamlit 페이지에 오류 메세지를 검색한다.</li><li>문서화된 이슈 중 내용 &gt; 날짜 &gt; 버전을 우선적으로 검색 결과를 나타낸다.</li></ol>
      <figure><img src={images[3]} alt="Issue Tree 통계 대시보드" className="w-full rounded-lg object-contain" /></figure>
      <ol className="ml-6 list-decimal space-y-2"><li>Streamlit 페이지에 ES 대시보드를 탑재하여 그동안 발생한 이슈의 통계적인 추이를 손쉽게 확인한다.</li><li>예시: 최다 이슈 스택, 최다 이슈 버전, 일별 이슈 요청 추이, 문서화된 이슈의 수치</li></ol>
      <figure><img src={images[4]} alt="Issue Tree 자동 알림 화면" className="w-full rounded-lg object-contain" /></figure>
      <figure><img src={images[5]} alt="Issue Tree 해결되지 않은 이슈 알림 흐름" className="w-full rounded-lg object-contain" /></figure>
      <ol className="ml-6 list-decimal space-y-2"><li>Streamlit에 검색하여 해결하지 못한 이슈의 에러 메세지를 파싱한다.</li><li>에러 경로와 에러 위치를 통해 Github 상의 마지막 수정자의 아이디를 불러온다.</li><li>Github 아이디를 통해 Slack의 해당 담당자를 찾는다.</li><li>Slack봇이 담당자의 DM과 팀 채널에 해당 이슈에 대한 내용을 전송한다.</li></ol>
    </CheckMateSection>
    <CheckMateSection title="역할"><Role title="Back-end Developer">SpringBoot(Java)와 Slack API를 이용해 이슈 등록부터 해결 과정까지의 데이터를 수집하고 서버에서 처리하는 기능을 구현하였습니다. AWS와 Github Action을 활용해 CI/CD를 구축하였습니다.</Role></CheckMateSection>
    <CheckMateSection title="구현 기능">
      <Feature number="1" numberStyle="paren" title="이슈 등록 워크플로우" description="Slack의 워크플로우 기능을 통해 질문자가 이슈를 채널에 등록할 수 있도록 설정"><img src={images[6]} alt="Issue Tree 이슈 등록 워크플로우" className="mt-2 w-full rounded-lg object-contain" /></Feature>
      <Feature number="2" numberStyle="paren" title="이슈 해결 처리" description=""><ol className="ml-6 list-decimal space-y-2"><li>이슈에 대해 여러 사람이 답글로 논의한 후, 해결이 되면 “해결” 버튼을 클릭</li><li>이후 메세지가 수정되며  &quot;메세지 게시 이벤트&quot; 트리거 발동</li><li>서버에서 이슈가 해결된 것을 감지하여 저장 로직 발동</li></ol><img src={images[7]} alt="Issue Tree 이슈 해결 처리" className="mt-2 w-full rounded-lg object-contain" /></Feature>
      <Feature number="3" numberStyle="paren" title="해결된 이슈 저장" description=""><p>...</p><ol className="ml-6 list-decimal space-y-2"><li>서버에 넘어온 Payload가 이벤트 감지로 넘어온 것인지, 해결 버튼이 눌려진 것인지 확인하여 메세지의 고유 ID 값을 추출</li><li>메세지 고유 ID 값으로 해당 워크플로우 내용을 ConversationReplies API를 통해 불러옴</li><li>워크플로우의 스택, 버전, 이슈내용, 질문자, 논의 내용을 모두 파싱</li><li>질문자와 답변자의 ID 값으로 Slack 에서의 이름을 UserInfo API를 통해 불러옴</li><li>이슈에 대한 해결책 내용을 ChatGPT API를 통해 요약함</li><li>최종적으로 스택, 버전, 이슈 내용, 질문자 이름, 요약된 논의 과정과 참여한 사람들을 모두 ES에 저장</li></ol><img src={images[8]} alt="Issue Tree 해결된 이슈 저장 구조" className="mt-2 w-full rounded-lg object-contain" /><img src={images[9]} alt="Issue Tree 해결된 이슈 저장 상세" className="mt-4 w-full rounded-lg object-contain" /></Feature>
    </CheckMateSection>
  </article>
}

function CheckMateDetail() {
  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-12 px-5 py-8 text-base sm:px-12 sm:py-12 sm:text-lg">
      <header className="flex flex-col gap-7">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-muted"><img src="/images/checkmate-detail-hero.png" alt="CheckMate 행사 관리 시스템" className="absolute inset-0 size-full object-cover" /></div>
        <p className="text-2xl font-black leading-tight sm:text-4xl"><strong>다양한 교내 행사 출석 및 통계 처리의 전산화</strong>를 위한 <strong>행사 관리 시스템</strong></p>
        <blockquote className="border-l-2 border-foreground/20 pl-4 text-base leading-8 text-muted-foreground sm:text-lg">
          <p>check (출석체크) + mate (함께)</p>
          <p>&quot;checkmate&quot;는 &apos;출석체크를 함께한다&apos;는 의미로, 출석을 간편하게 체크하고 관리할 수 있도록 사용자와 함께하는 출석 관리 시스템을 상징합니다.</p>
        </blockquote>
      </header>

      <CheckMateSection title="팀 소개">
        <InfoRow label="배경" value="숙명여자대학교 졸업프로젝트 팀" />
        <InfoRow label="구성" value="Front-end developer 2인, Back-end Develper 1인" />
        <InfoRow label="기간" value="2024.03 - 2024. 10" />
      </CheckMateSection>

      <CheckMateSection title="서비스 성과">
        <Bullet>교내 사업단과 협업하여 사용자 인터뷰 및 테스트 진행</Bullet>
        <Bullet>졸업작품 전시회 우수상 수상</Bullet>
        <Bullet>이후 온라인 행사 출석을 더욱 간편하게 확인할 수 있는 EZZ00M 시스템 및 상용화</Bullet>
      </CheckMateSection>

      <CheckMateSection title="서비스 소개">
        <p>기존에 수기로 관리 되던 교내 행사 관리 체계를 CheckMate 서비스를 통해 디지털화하여, 학생 출석 확인부터 이후 참석자 분석까지 한 번에 처리할 수 있는 통합 서비스를 기획하였습니다.</p>
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-muted"><img src="/images/checkmate-flow.png" alt="CheckMate 서비스 개선 흐름" className="absolute inset-0 size-full object-contain" /></div>
      </CheckMateSection>

      <CheckMateSection title="역할">
        <Role title="Product Manager">실제 서비스 기획부터 사용자 인터뷰, 테스트까지 마치��� 상용화를 위한 졸업작품 발표회에서 발표를 맡으며 서비스를 소개하였습니다.</Role>
        <Role title="Back-end Developer">SpringBoot(java)를 이용해 백엔드 개발을 했고, RESTful API 설계 및 구현을 맡았습니다. 이후 AWS(EC2, RDS)를 이용해 서비스 배포 및 운영을 하였습니다.</Role>
      </CheckMateSection>

      <CheckMateSection title="구현 기능">
        <Feature number="1" title="행사 등록" description="행사 주최자(유저)가 온라인/오프라인, 교내/교외, 다회차/1회차 등 다양한 타입의 행사를 등록, 수정, 조회, 삭제할 수 있는 기능"><Role title="참석자 명단 등록 기술">엑셀 파일 형태의 참석자 명단을 Apache POI 라이브러리를 사용하여 안정적으로 데이터를 읽고 이를 DB에 저장하도록 구현</Role></Feature>
        <Feature number="2" title="행사 출석" description="행사 참석자가 자신의 학번/전화번호 입력 및 전자서명을 통해 출석체크를 할 수 있는 기능" />
        <Feature number="3" title="행사 참석명단 생성" description="행사 주최자(유저)가 행사 참석명단을 파일로 다운받을 수 있는 기능"><Role title="참석명단 생성 로직"><ol className="ml-5 list-decimal space-y-2"><li>iText 라이브러리를 사용하여 각 회차별 참석자의 출석 정보와 서명 이미지를 PDF로 생성</li><li>Apache POI 라이브러리를 이용하여 총 참석자 이수 여부를 Excel로 생성</li><li>생성한 PDF 데이터를 ByteArrayOutputStream을 통해 메모리에 저장</li><li>ByteArrayResource를 사용해 PDF 데이터를 MultipartFile 형태로 변환</li></ol><ul className="ml-5 list-disc space-y-1"><li>해당 로직은 <strong>단일 책임 원칙</strong>(Single Responsibility Principle)에 따라 구현되었습니다.</li><li className="ml-5 list-[circle]">ByteArrayOutputStream은 PDF 데이터를 생성하고 메모리에 저장하는 역할입니다.</li><li className="ml-5 list-[circle]">ByteArrayResource는 이미 생성된 데이터를 다른 형태로 변환하는 역할을 하며, ByteArrayOutputStream의 데이터를 직접 참조하여 메모리 효율성을 유지합니다.</li></ul></Role></Feature>
        <Feature number="4" title="행사 통계" description={<><span>세부 통계 : 각 행사에 참여한 학생의 이수 비율, 학번 비율을 확인할 수 있는 기능</span><br /><span>전체 통계 : 행사 주최자(유저)가 진행한 모든 행사에 대해 가장 참석률이 높은 학생 및 행사를 확인할 수 있는 기능</span></>} />
        <Feature number="5" title="행사 안내 메일" description="행사 시작 24시간 전 리마인드 메일, 행사 종료 1시간 후 만족도 조사 메일이 자동으로 발송되는 기능"><Role title="메일 생성 기술">JavaMailSender가 Gmail SMTP 서버를 통해 이메일을 전송할 수 있도록 구현{ '\n' }행사 이미지 전송을 위해 ByteArrayResource 클래스 사용으로 이메일에 첨부파일 추가</Role></Feature>
        <Feature number="6" title="비대면 행사 출석" description="Zoom으로 진행된 행사의 참석자 Zoom Log 기록 첨부 시, 참석 명단을 파일로 다운받을 수 있는 기능"><Role title="Zoom Log 데이터 리딩 기술">Java I/O BufferedReader, InputStreamReader로 CSV 파일의 데이터를 읽도록 구현</Role></Feature>
      </CheckMateSection>

      <CheckMateSection title="개발 과정"><div className="relative mx-auto aspect-[1066/1158] w-full max-w-2xl overflow-hidden rounded-lg bg-muted"><img src="/images/checkmate-development.png" alt="CheckMate 버전별 업데이트 내역" className="absolute inset-0 size-full object-contain" /></div></CheckMateSection>
    </article>
  )
}

function CheckMateSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="flex flex-col gap-5 border-t border-border pt-8"><h5 className="text-2xl font-bold tracking-tight">{title}</h5><div className="flex flex-col gap-5 text-base leading-8 text-muted-foreground">{children}</div></section>
}

function InfoRow({ label, value }: { label: string; value: string }) { return <p><span className="font-semibold text-foreground">{label} :</span> {value}</p> }
function Bullet({ children }: { children: React.ReactNode }) { return <p className="pl-5 before:mr-2 before:content-['•']">{children}</p> }
function Role({ title, children }: { title: string; children: React.ReactNode }) { const isTechnicalRole = title !== 'Product Manager' && title !== 'Back-end Developer'; return <div className={isTechnicalRole ? 'ml-6 flex flex-col gap-3' : 'flex flex-col gap-4'}><h6 className={isTechnicalRole ? 'w-fit rounded-sm bg-muted px-1.5 py-0.5 text-[0.95rem] font-normal text-neutral-900 dark:text-neutral-100' : 'w-fit rounded-sm bg-muted px-1.5 py-0.5 font-mono text-base font-bold text-neutral-900 dark:text-neutral-100'}>{isTechnicalRole ? <><span className="mr-1 text-[0.95rem] font-normal text-neutral-900 dark:text-neutral-100">+</span>{title.replace(/^\+\s*/, '')}</> : title}</h6><div className="text-base leading-8 text-foreground">{children}</div></div> }
function Feature({ number, numberStyle = 'dot', title, description, children }: { number: number; numberStyle?: 'dot' | 'paren'; title: string; description?: React.ReactNode; children?: React.ReactNode }) { return <div className="flex flex-col gap-3"><h6 className="w-fit rounded-sm bg-muted px-1.5 py-0.5 text-base font-bold text-foreground"><span className="mr-1.5">{numberStyle === 'paren' ? `(${number})` : `${number}.`}</span>{title}</h6>{description ? <p className="ml-2 border-l border-foreground/60 pl-4 text-[0.95em] italic leading-7">{description}</p> : null}{children}</div> }

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [primaryLink, ...otherLinks] = project.links

  return (
    <li className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
      <button type="button" onClick={() => dialogRef.current?.showModal()} className="relative block aspect-[16/9] w-full overflow-hidden border-b border-border bg-muted text-left" aria-label={`${project.name} 프로젝트 소개 보기`}>
        <Image src={project.image || '/placeholder.svg'} alt={`${project.name} 프로젝트 이미지`} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </button>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1.5"><h3 className="text-lg font-bold text-foreground">{project.name}</h3><p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p></div>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          <button type="button" onClick={() => dialogRef.current?.showModal()} className="inline-flex items-center gap-1 rounded-md bg-accent px-2.5 py-1.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"><Code2 className="size-3.5" aria-hidden="true" />프로젝트 소개</button>
          {otherLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{link.label}<ArrowUpRight className="size-3.5" aria-hidden="true" /><span className="sr-only">({project.name}, 새 탭)</span></a>)}
        </div>
      </div>
      <dialog ref={dialogRef} className="m-auto h-[min(94vh,64rem)] w-[min(96vw,78rem)] max-h-[94vh] overflow-y-auto rounded-2xl border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-foreground/35">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur sm:px-8"><div><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Project detail</p><h4 className="mt-1 text-xl font-bold">{project.name}</h4></div><button type="button" onClick={() => dialogRef.current?.close()} className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="프로젝트 소개 닫기"><X className="size-5" aria-hidden="true" /></button></div>
        {project.name === 'CheckMate' ? <CheckMateDetail /> : project.name === 'Issue Tree' ? <IssueTreeDetail /> : <div className="flex flex-col gap-6 px-5 py-5 sm:px-10 sm:py-10"><div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg bg-muted"><Image src={project.image || '/placeholder.svg'} alt={`${project.name} 대표 이미지`} fill sizes="(min-width: 1024px) 1000px, 90vw" className="object-cover" /></div><p className="text-sm leading-7 text-muted-foreground">{project.summary}</p><div className="flex flex-col gap-5 text-sm leading-7 text-muted-foreground">{project.detail.split(/\n\n+/).map((block, index) => <p key={`${block.slice(0, 20)}-${index}`} className="whitespace-pre-line">{block}</p>)}</div></div>}
      </dialog>
    </li>
  )
}
