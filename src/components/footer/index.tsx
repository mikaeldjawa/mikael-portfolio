"use client"
import { useRef, useEffect } from "react"
import gsap from 'gsap'
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger"
import FooterTitle from "./footer-title"
import FooterContent from "./footer-content"
import FooterBottom from "./footer-bottom"
import ScrollToTop from "./scroll-to-top"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;

      const triggers: ScrollTrigger[] = []

      if (titleRef.current) {
        const lines = gsap.utils.toArray<HTMLElement>(".footer-title-line")

        gsap.set(lines, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          transformOrigin: "50% 50%",
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
            id: "footer-title"
          }
        })

        lines.forEach((line, i) => {
          tl.to(
            line,
            {
              opacity: 1,
              rotateX: 0,
              y: 0,
              duration: 0.3,
              ease: "back.out(2)"
            },
            i * 0.15
          )
        })

        triggers.push(tl.scrollTrigger as ScrollTrigger)
      }
      if (contentRef.current) {
        const items = gsap.utils.toArray<HTMLElement>(".footer-item")

        gsap.from(items, {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            id: "footer-content"
          }
        })
      }

      ScrollTrigger.refresh()

      return () => {
        triggers.forEach(t => t?.kill())
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer
      ref={sectionRef}
      className="relative bg-black text-white py-20 md:py-32 px-8 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <FooterTitle ref={titleRef} />
        <FooterContent ref={contentRef} />
        <FooterBottom />
        <ScrollToTop />
      </div>
    </footer>
  )
}
