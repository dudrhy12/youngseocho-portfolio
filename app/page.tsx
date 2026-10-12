import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { ActivitiesSection } from '@/components/portfolio/activities-section'
import { AwardsSection } from '@/components/portfolio/awards-section'
import { InternationalExperienceSection, PublicationSection } from '@/components/portfolio/additional-experience-sections'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 md:px-8">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ActivitiesSection />
        <InternationalExperienceSection />
        <PublicationSection />
        <AwardsSection />
      </main>
    </>
  )
}
