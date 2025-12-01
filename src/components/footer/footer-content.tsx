import { footerContent } from "@/data/footer-content"
import { forwardRef } from "react"

const FooterContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">

      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">
          {footerContent.getInTouch.title}
        </h3>

        <div className="space-y-3">
          {footerContent.getInTouch.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block text-gray-300 hover:text-white text-sm md:text-base"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">
          {footerContent.followMe.title}
        </h3>

        <div className="space-y-3">
          {footerContent.followMe.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">
          {footerContent.explore.title}
        </h3>

        <div className="space-y-3">
          {footerContent.explore.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
})

FooterContent.displayName = "FooterContent"
export default FooterContent
