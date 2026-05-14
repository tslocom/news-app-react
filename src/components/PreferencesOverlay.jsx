import PublicationFollower from "./PublicationFollower";
import TagFollower from "./TagFollower";
import TagIgnorer from "./TagIgnorer";

function PreferencesOverlay({ isOverlayOpen, setIsOverlayOpen }) {
    if (!isOverlayOpen) return null;
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return(
        <div 
            className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/40 backdrop-blur-sm p-4 sm:p-8 md:p-16 pt-20 md:pt-24 overflow-y-auto transition-opacity"
            onClick={() => setIsOverlayOpen("")}>
            <div 
                className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant mb-auto overflow-hidden"
                onClick={handleModalClick}>
                <button 
                    onClick={() => setIsOverlayOpen("")}
                    className="absolute top-4 right-4 p-2 text-outline hover:text-on-surface transition-colors z-10 bg-surface-container-low/50 hover:bg-surface-container-high rounded-full"
                    aria-label="Close modal">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
                <div className="p-6 md:p-10 min-h-[50vh]">
                    {isOverlayOpen === "publications" && <PublicationFollower />}
                    {isOverlayOpen === "followedTags" && <TagFollower />}
                    {isOverlayOpen === "ignoredTags" && <TagIgnorer />}
                </div>
            </div>
        </div>
    )
}

export default PreferencesOverlay;