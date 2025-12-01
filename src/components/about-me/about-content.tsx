"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

interface AboutContentProps {
  triggerRef: React.RefObject<HTMLDivElement | null>
}

export default function AboutContent({ triggerRef }: AboutContentProps) {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const nextLogo = useRef<HTMLDivElement | null>(null)
  const tsLogo = useRef<HTMLImageElement | null>(null)
  const reactLogo = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!textRef.current || !triggerRef?.current) return;

      const triggers: ScrollTrigger[] = [];
      const split = new SplitType(textRef.current, {
        types: "words",
      });

      gsap.set(split.words, { opacity: 0.2, filter: "blur(8px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          end: "+=450%",
          scrub: 1,
          invalidateOnRefresh: true,
          id: "about-text"
        }
      });

      tl.to(split.words, {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        ease: "power2.out",
      });

      if (nextLogo.current && tsLogo.current && reactLogo.current) {
        gsap.set([nextLogo.current, tsLogo.current, reactLogo.current], {
          opacity: 0,
          scale: 0,
        });

        const logoTL = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef?.current,
            start: "top top",
            end: "+=250%",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "about-logos"
          }
        });

        logoTL
          .to(nextLogo.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "back.out(2)"
          }, 0.4)
          .to(tsLogo.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "back.out(2)"
          }, 0.6)
          .to(reactLogo.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "back.out(2)"
          }, 0.8);
      }

      return () => {
        triggers.forEach(trigger => trigger.kill());
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [triggerRef]);

  return (
    <div className="max-w-3xl">
      <h3
        ref={textRef}
        className="text-2xl md:text-4xl lg:text-5xl font-medium text-neutral-500 leading-relaxed"
      >
        I'm an Informatics graduate passionate about crafting clean, responsive, and user-friendly interfaces using
        Next.js
        <div
          ref={nextLogo}
          className='bg-white rounded-full inline-block w-10 md:w-12 ml-2 opacity-0'
        >
          <img className='w-full p-0.5' src={"/assets/nextjs-icon.svg"} alt="Next.js" />
        </div>, TypeScript
        <img
          ref={tsLogo}
          className='w-10 md:w-12 inline-block ml-2 opacity-0'
          src={"/assets/typescript-icon.svg"}
          alt="TypeScript"
        />, and React
        <img
          ref={reactLogo}
          className='w-10 md:w-12 inline-block ml-2 opacity-0'
          src={"/assets/reactjs-icon.svg"}
          alt="React"
        />.
        My focus is creating digital experiences that look great and feel natural.
      </h3>
    </div>
  )
}