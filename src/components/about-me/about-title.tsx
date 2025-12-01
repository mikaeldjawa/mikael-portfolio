"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AboutTitleProps {
  triggerRef: React.RefObject<HTMLDivElement | null>
}

export default function AboutTitle({ triggerRef }: AboutTitleProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!titleRef.current || !triggerRef.current) return;

      gsap.set(titleRef.current, {
        opacity: 0,
        rotateY: 90,
        transformOrigin: "50% 50%",
      });

      const titleAnim = gsap.to(titleRef.current, {
        opacity: 1,
        rotateY: 0,
        duration: 1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "top top",
          scrub: 1,
          invalidateOnRefresh: true,
          id: "about-title"
        }
      });

      return () => {
        titleAnim.scrollTrigger?.kill();
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [triggerRef]);

  return (
    <div className="min-w-screen flex justify-center items-center">
      <div className="text-center" style={{ perspective: "1000px" }}>
        <div ref={titleRef} className="about-title-line mb-6">
          <h2
            className="text-5xl md:text-9xl lg:text-9xl font-black tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: "2px white",
              textShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            WHO AM I?
          </h2>
        </div>
      </div>
    </div>
  )
}