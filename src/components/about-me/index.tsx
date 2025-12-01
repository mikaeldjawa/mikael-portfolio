"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutContent from './about-content';
import AboutImage from './about-image';
import AboutTitle from './about-title';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const timer = setTimeout(() => {
      if (!sectionRef.current || !triggerRef.current) return;

      const horizontalScroll = gsap.fromTo(
        sectionRef.current,
        { translateX: "-100%" },
        {
          translateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=400%",
            scrub: 0.08,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "about-horizontal"
          }
        }
      );

      ScrollTrigger.refresh();

      return () => {
        horizontalScroll.scrollTrigger?.kill();
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      className='overflow-hidden bg-neutral-900 h-screen w-screen '
    >
      <div ref={sectionRef} className='flex w-screen h-full md:flex-row'>
        <div className="min-w-screen flex flex-col-reverse md:flex-row justify-center items-center md:gap-16 px-8 md:px-16">
          <AboutContent triggerRef={triggerRef} />
          <AboutImage triggerRef={triggerRef} />
        </div>
        <AboutTitle triggerRef={triggerRef} />
      </div>
    </section>
  )
}