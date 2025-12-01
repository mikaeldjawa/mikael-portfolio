"use client"
import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Welcome() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const textContainerRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const timer = setTimeout(() => {
      if (!sectionRef.current) return;

      const triggers: ScrollTrigger[] = [];

      if (imageRef.current) {
        const imageParallax = gsap.to(imageRef.current, {
          y: isMobile ? "30%" : "50%",
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "welcome-image"
          }
        });
        if (imageParallax.scrollTrigger) triggers.push(imageParallax.scrollTrigger);
      }

      if (overlayRef.current) {
        const overlayFade = gsap.to(overlayRef.current, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "welcome-overlay"
          }
        });
        if (overlayFade.scrollTrigger) triggers.push(overlayFade.scrollTrigger);
      }

      if (textContainerRef.current) {
        const lines = gsap.utils.toArray<HTMLElement>(".welcome-line");
        const decorations = gsap.utils.toArray<HTMLElement>(".decoration");

        gsap.from(lines, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.15,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.3
        });

        gsap.from(decorations, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(2)",
          delay: 1
        });

        const textParallax = gsap.to(textContainerRef.current, {
          y: isMobile ? "-50%" : "-80%",
          opacity: 0,
          scale: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "welcome-text"
          }
        });
        if (textParallax.scrollTrigger) triggers.push(textParallax.scrollTrigger);
      }

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach(trigger => trigger.kill());
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-[101vh] w-screen relative overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/assets/hero-section.jpeg"
          alt="Hero Section"
          className="object-cover grayscale"
          fill
          priority
        />
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0"
        style={{ willChange: 'opacity' }}
      />

      <div
        ref={textContainerRef}
        className="absolute inset-0 flex items-center justify-center px-8"
        style={{
          perspective: "1000px",
          willChange: 'transform, opacity'
        }}
      >
        <div className="text-center">

          {/* Main title */}
          <div className="space-y-2 md:space-y-4">
            <div className="welcome-line">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]">
                WELCOME
              </h1>
            </div>

            <div className="welcome-line">
              <h1
                className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent"
                style={{
                  WebkitTextStroke: '2px white',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.5)'
                }}
              >
                TO MY
              </h1>
            </div>

            <div className="welcome-line flex justify-center items-center gap-4">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-yellow-300 text-black px-4 md:px-8 py-2 md:py-4 -skew-x-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                CREATIVE
              </h1>
            </div>

            <div className="welcome-line">
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white border-4 md:border-8 border-white px-4 md:px-8 py-2 md:py-4 skew-x-6 inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                SPACE
              </h1>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="welcome-line mt-12">
            <p className="text-white text-sm md:text-base tracking-widest uppercase">
              Scroll to explore
            </p>
            <div className="mt-4 w-6 h-10 border-2 border-white rounded-full mx-auto relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}