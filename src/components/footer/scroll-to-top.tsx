import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  return (
    <div className="footer-item flex justify-center mt-12">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative w-14 h-14 border-2 border-white rounded-full hover:bg-yellow-300 hover:border-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(253,224,71,0.5)] cursor-pointer"
      >
        <div className="absolute inset-0 flex items-center justify-center group-hover:text-neutral-950 transition-colors">
          <ArrowUp size={20} />
        </div>
      </button>
    </div>
  )
}
