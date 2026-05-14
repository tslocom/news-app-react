import TagFollower from '../components/TagFollower.jsx'
import TagIgnorer from '../components/TagIgnorer.jsx'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function InitialTagSelector() {
  const [currentList, setCurrentList] = useState('follow')

  const navigate = useNavigate()

  const handleContinue = () => {
    if (currentList === 'follow') {
      setCurrentList('ignore')
    } else {
      navigate('/home')}
  }

  const handleBack = () => {
    if (currentList === 'ignore') {
      setCurrentList('follow')
    } else {
      navigate('/choosepublications')}
    }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="sticky top-0 z-50 w-full px-6 md:px-8 py-6 flex justify-between items-center border-b border-outline-variant bg-surface-container-lowest">
        <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all duration-200 hover:-translate-y-1">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="font-sans font-semibold text-[14px]">Back</span>
        </button>
        
        <div className="text-[20px] font-serif font-black tracking-tighter text-on-surface hidden sm:block">
            Use tags to shape your feed
        </div>
        
        <button 
            onClick={handleContinue}
            className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-all duration-200 hover:-translate-y-1">
            Continue
        </button>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 md:px-8 py-12">
        <div className="w-full max-w-[680px]">
            {currentList === 'follow' && <TagFollower setCurrentList={setCurrentList} />}
            {currentList === 'ignore' && <TagIgnorer setCurrentList={setCurrentList} />}
        </div>
      </main>
    </div>
  )
}

export default InitialTagSelector