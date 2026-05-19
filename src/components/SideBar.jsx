import { Link } from 'react-router-dom';
import { logout } from '../services/userServices.js'
import { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    {id: 'home', label: 'Home'},
    {id: 'bookmarks', label: 'Bookmarks'}
  ]
    return (
        <nav className={`fixed left-0 top-16 md:top-20 z-40 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] bg-slate-50 border-r border-slate-200 flex flex-col justify-start sm:w-64 sm:p-6 ${isMenuOpen ? 'w-64 p-6' : 'w-auto p-2'}`}>
            <button
            className="block sm:hidden self-start"
            onClick={() => setIsMenuOpen((prev) => !prev)}>
                <span className="material-symbols-outlined">menu</span>
            </button>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col flex-1 mt-2`}>
                <ul className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link 
                                to={`/${link.id}`} 
                                className="flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-slate-900">
                                    {link.id === 'home' ? 'home' : 'bookmark'}
                                </span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex flex-col gap-4">
                    <button 
                        onClick={() => { logout(); window.location.href = '/login'; }}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors group cursor-pointer">
                        <span className="material-symbols-outlined group-hover:text-red-600">logout</span>
                        Log Out
                    </button>
                    <button className="w-full py-3 bg-[#0b1c30] text-white rounded-lg font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm">
                        Upgrade to Premium
                    </button>
                </div>
            </div>
        </nav>
        )
    }


export default NavBar;