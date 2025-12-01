"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useProjectsAnimation = (
  sectionRef: any,
  triggerRef: any,
  titleRef: any
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sectionRef?.current || !triggerRef?.current) return;

      const isMobile = window.innerWidth <= 768;

      const triggers: ScrollTrigger[] = [];

      if (titleRef.current) {
        const lines = gsap.utils.toArray<HTMLElement>(".title-line");

        gsap.set(lines, {
          opacity: 0,
          rotateX: -90,
          y: 100,
          transformOrigin: "50% 50%",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top center",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "projects-title",
          },
        });

        lines.forEach((line, index) => {
          tl.to(
            line,
            {
              opacity: 1,
              rotateX: 0,
              y: 0,
              duration: 0.3,
              ease: "back.out(2)",
            },
            index * 0.15
          );
        });

        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);

        const rotate = gsap.to(lines, {
          rotateY: 15,
          rotateX: 5,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            invalidateOnRefresh: true,
            id: "projects-title-rotate",
          },
        });

        if (rotate.scrollTrigger) triggers.push(rotate.scrollTrigger);
      }

      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: isMobile ? "1%" : "-225%",
          transformOrigin: "50% 50%",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: isMobile ? "0" : "+=500%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "projects-horizontal",
          },
        }
      );

      if (pin.scrollTrigger) triggers.push(pin.scrollTrigger);

      const cards = gsap.utils.toArray<HTMLElement>(".card-project");

      if (cards.length > 0) {
        const cardAnim = gsap.from(cards, {
          x: 0,
          y: 0,
          opacity: 1,
          rotateX: 50,
          rotateZ: 50,
          transformOrigin: "100% 100%",
          stagger: { each: 0.4 },
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 0.6,
            invalidateOnRefresh: true,
            id: "projects-cards",
          },
        });

        if (cardAnim.scrollTrigger) triggers.push(cardAnim.scrollTrigger);
      }

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => t.kill());
      };
    }, 150);

    return () => clearTimeout(timer);
  }, []);
};
