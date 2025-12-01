"use client"

import { forwardRef } from "react"

const ProjectsTitle = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div className="title-line relative mb-2">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-black via-neutral-800 to-black">
          CURIOUS
        </h2>
      </div>

      <div className="title-line relative mb-2">
        <h2
          className="text-7xl md:text-9xl font-black tracking-tighter text-white"
          style={{
            WebkitTextStroke: "3px black",
            textShadow: "4px 4px 0px rgba(0,0,0,0.2)",
          }}
        >
          ABOUT WHAT
        </h2>
      </div>
      <div className="title-line relative flex items-center gap-4 flex-col md:flex-row">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter bg-black text-yellow-300 px-6 py-2 -skew-x-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          I'VE
        </h2>
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black border-8 border-black px-6 py-2 skew-x-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          BUILT?
        </h2>
      </div>
    </div>
  );
});

ProjectsTitle.displayName = "ProjectsTitle";
export default ProjectsTitle;
