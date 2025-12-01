"use client"

interface LogoutButtonProps {
  onLogout: () => void
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <button
      onClick={onLogout}
      className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      Logout
    </button>
  )
}
