"use client"
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AboutImageProps {
  triggerRef: React.RefObject<HTMLDivElement | null>
}

export default function AboutImage({ triggerRef }: AboutImageProps) {
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const timer = setTimeout(() => {

      gsap.set(imageRef.current, {
        opacity: 0,
      });

      const imageAnim = gsap.to(imageRef.current, {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          invalidateOnRefresh: true,
          id: "about-image"
        }
      });

      return () => {
        imageAnim.scrollTrigger?.kill();
      };
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [triggerRef]);

  return (
    <div
      ref={imageRef}
      className="md:block relative opacity-0"
    >
      <div className="w-64 h-80 lg:w-72 lg:h-96 relative shadow-2xl">
        <Image
          src="/assets/hero-section.jpeg"
          alt="Profile"
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
          fill
        />
      </div>
    </div>
  )
}