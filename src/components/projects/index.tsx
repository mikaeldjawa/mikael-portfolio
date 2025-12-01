"use client"
import { useRef } from "react"
import { useProjectsAnimation } from "./animations/use-project-animation"
import ProjectsTitle from "./project-title"
import ProjectCard from "./project-card"
import { projects } from "@/data/projects"

export default function Projects() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  const titleRef = useRef(null)

  useProjectsAnimation(sectionRef, triggerRef, titleRef)

  return (
    <section ref={triggerRef} className="overflow-hidden bg-neutral-50 flex">

      <div
        ref={sectionRef}
        className="
      flex 
      h-auto w-full 
      flex-col gap-10 
      md:h-screen md:w-screen md:flex-row md:items-center
    "
      >
        <div className="w-full md:min-w-screen relative px-8">
          <ProjectsTitle ref={titleRef} />
        </div>

        <div
          className="flex flex-col gap-6 md:flex-row md:flex-no-wrap md:items-center md:justify-center"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

      </div>
    </section>

  );
}
