import { useEffect } from 'react';


function SearchOverlay({ searchResults, isOverlayOpen, onClose }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
        }, [onClose]);
    if (!isOverlayOpen) return null;
 
    return (
        <div>
            <div className="fixed inset-0 top-20 z-40 bg-slate-900/40 backdrop-blur-sm" />
            <div className="absolute top-full left-0 right-0 z-50">
                <div className="w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-sm border border-slate-200 flex flex-col max-h-[60vh] overflow-hidden">
                    <div className="p-2 border-b border-slate-100 flex justify-end">
                        <button onClick={onClose} className="p-1 hover:bg-slate-50 transition-colors rounded-full">
                            <span className="material-symbols-outlined text-slate-500 text-sm">close</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {searchResults.length === 0 ? (
                            <div className="text-center text-slate-500 py-8 font-sans">
                                No results found.
                            </div> ) : (
                        searchResults.map((article, index) => (
                        <a href={article.link} key={index} target="_blank" rel="noopener noreferrer">
                            <div className="px-6 py-5 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors group">
                                <h3 className="font-headline-md text-slate-900 group-hover:text-secondary transition-colors mb-2">
                                    {article.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.split(',').map((tag, i) => (
                                        <span key={i} className={`px-2 py-0.5 font-ui-label-sm text-[11px] uppercase tracking-wider rounded-sm ${tag.trim() === 'Analysis' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-slate-100 text-slate-600'}`}>
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                        )))}
                    </div>
                    <div className="p-3 bg-white border-t border-slate-100 flex justify-center">
                        <button className="text-secondary font-ui-label-bold text-xs hover:underline">
                            View All Results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchOverlay