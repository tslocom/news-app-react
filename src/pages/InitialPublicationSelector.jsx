import PublicationFollower from '../components/PublicationFollower.jsx'
import { useNavigate } from 'react-router-dom'

function InitialPublicationSelector() {
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/choosetags')
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="sticky top-0 z-50 w-full px-6 md:px-8 py-6 flex justify-between items-center border-b border-outline-variant bg-surface-container-lowest">
        <div className="w-[72px]"></div>
        
        <div className="text-[20px] font-serif font-black tracking-tighter text-on-surface hidden sm:block">
            Welcome to Echo Free News
        </div>
        
        <button 
            onClick={handleContinue}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all duration-200 hover:-translate-y-1">
            Continue
        </button>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 md:px-8 py-12">
        <div className="w-full max-w-[680px]">
            <PublicationFollower />
        </div>
      </main>
    </div>
  )
}

export default InitialPublicationSelector