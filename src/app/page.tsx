'use client'

import { useEffect, useState } from 'react'
import Welcome from '@/components/welcome'
import AboutMe from '@/components/about-me'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import { LoginModal } from '@/components/login/log-in-modal'
import { useLogin } from '@/hooks/use-login'
import LogoutButton from '@/components/login/log-out'
import { is } from 'zod/locales'


export default function Home() {
  const { form, loading, error, isAuthenticated, handleLogin, logout } = useLogin()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('isAuthenticated')
    if (saved === 'true') return

    const handleScroll = () => {
      if (window.scrollY > 1 && !showModal) {
        setShowModal(true)
        document.documentElement.classList.add("no-scroll")
        document.body.classList.add("no-scroll")
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showModal, isAuthenticated])

  useEffect(() => {
    if (showModal && !isAuthenticated) {
      document.documentElement.classList.add("no-scroll")
      document.body.classList.add("no-scroll")
    } else {
      document.documentElement.classList.remove("no-scroll")
      document.body.classList.remove("no-scroll")
    }
  }, [showModal, isAuthenticated])



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

      {isAuthenticated && (
        <LogoutButton onLogout={logout} />
      )}

    </main>
  )
}