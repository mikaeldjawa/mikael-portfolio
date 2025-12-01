import { forwardRef } from "react"

const FooterTitle = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="text-center mb-16 md:mb-24"
      style={{ perspective: "1000px" }}
    >
      <div className="footer-title-line mb-4">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white via-yellow-300 to-white">
          LET'S CREATE
        </h2>
      </div>

      <div className="footer-title-line mb-6">
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "0 0 20px rgba(255,255,255,0.3)"
          }}
        >
          SOMETHING
        </h2>
      </div>

      <div className="footer-title-line flex justify-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-yellow-300 text-black px-8 py-3 -skew-x-6 shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
          AMAZING
        </h2>
      </div>
    </div>
  )
})

FooterTitle.displayName = "FooterTitle"
export default FooterTitle
