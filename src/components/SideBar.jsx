import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/userServices.js'

function NavBar() {
  const navigate = useNavigate();
  const navLinks = [
    {id: 'home', label: 'Home'},
    {id: 'bookmarks', label: 'Bookmarks'}
  ]
    return (
        <nav className="fixed left-0 top-16 md:top-20 z-40 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-64 bg-slate-50 border-r border-slate-200 flex flex-col justify-between p-6">
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
            <div className="flex flex-col gap-4">
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
        </nav>
        )
    }


export default NavBar;