'use client'
import { useEffect, useState } from 'react'
import Welcome from '@/components/welcome'
import AboutMe from '@/components/about-me'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import { LoginModal } from '@/components/login/log-in-modal'
import { useLogin } from '@/hooks/use-login'


export default function Home() {
  const { form, loading, error, isAuthenticated, handleLogin } = useLogin()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('isAuthenticated')
    if (saved === 'true') return

    const handleScroll = () => {
      if (window.scrollY > 1 && !showModal) {
        setShowModal(true)
        document.body.style.overflow = 'hidden'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showModal])

  useEffect(() => {
    if (!showModal) {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])

  useEffect(() => {
    if (isAuthenticated) {
      setShowModal(false)
      document.body.style.overflow = 'auto'
    }
  }, [isAuthenticated])


  return (
    <main>
      <Welcome />
      <AboutMe />
      <Projects />
      <Footer />
      {showModal && !isAuthenticated && (
        <LoginModal
          form={form}
          error={error}
          loading={loading}
          onSubmit={handleLogin}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  )
}