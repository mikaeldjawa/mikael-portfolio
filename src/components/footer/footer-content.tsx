import { forwardRef } from "react"

const FooterContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">Get In Touch</h3>
        <div className="space-y-3">
          <a className="block text-gray-300 hover:text-white text-sm md:text-base" href="mailto:hello@example.com">
            mikaelagungdjawa@gmail.com
          </a>
          <a className="block text-gray-300 hover:text-white text-sm md:text-base" href="tel:+6281245764595">
            (+62)81245764595
          </a>
        </div>
      </div>

      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">Follow Me</h3>
        <div className="space-y-3">
          <a className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ GitHub</a>
          <a className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ LinkedIn</a>
          <a className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ Instagram</a>
        </div>
      </div>

      <div className="footer-item">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-yellow-300">Explore</h3>
        <div className="space-y-3">
          <a href="#projects" className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ Projects</a>
          <a href="#about" className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ About</a>
          <a href="#contact" className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300">→ Contact</a>
        </div>
      </div>

    </div>
  )
})

FooterContent.displayName = "FooterContent"
export default FooterContent
