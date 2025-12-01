import { X } from 'lucide-react'

export const LoginModal = ({ form, error, loading, onSubmit, onClose }: any) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 hover:scale-110 transition"> <X /> </button>
        <h2 className="text-3xl font-black text-center mb-6">Login Required</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-black text-xs">Username</label>
            <input
              {...form.register('username')}
              className="w-full border-4 border-black p-3 font-bold"
              placeholder="Enter username"
            />
            {form.formState.errors.username && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="font-black text-xs">Password</label>
            <input
              type="password"
              {...form.register('password')}
              className="w-full border-4 border-black p-3 font-bold"
              placeholder="Enter password"
            />
            {form.formState.errors.password && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.password.message}</p>
            )}
          </div>


          {error && <p className="text-center bg-red-400 border-4 border-black p-2 font-black">{error}</p>}


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-yellow-300 border-4 border-black py-3 font-black hover:-translate-y-1 transition"
          >
            {loading ? 'Loading...' : 'Sign In →'}
          </button>
        </form>
      </div>
    </div>
  )
}