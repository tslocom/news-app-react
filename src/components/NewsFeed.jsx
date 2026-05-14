import { useFeed, useBookmarks } from '../context/ArticleContext.jsx';

function NewsFeed({ type }) {
  const { articles } = useFeed();
  const { savedArticles, onSave, onUnsave } = useBookmarks();
  
  const currentFeed = type === 'bookmarks' ? savedArticles : articles || [];

  const handleIconClick = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  }

  const tagStyles = [
  'bg-blue-100 text-blue-800',
  'bg-red-100 text-red-800',
  'bg-purple-100 text-purple-800',
  'bg-orange-100 text-orange-800',
  'bg-emerald-100 text-emerald-800',
  'bg-pink-100 text-pink-800',
  'bg-amber-100 text-amber-800',
  'bg-cyan-100 text-cyan-800'
  ];

  return (
    <main className="lg:ml-64 pt-16 md:pt-24 p-4 md:p-8 min-h-screen bg-background">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-baseline justify-between border-b border-outline-variant pb-2 mb-2">
          <h1 className="font-serif text-display-xl text-on-surface">
            {type === 'bookmarks' ? 'Saved Items' : 'Top Stories'}
          </h1>
        </div>

        {currentFeed.map((item) => {
          const isBookmarked = savedArticles.some((s) => s.id === item.id);
          return (
            <article 
              key={item.id} 
              className="relative flex flex-col sm:flex-row gap-card-editorial p-card-editorial bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-container-low transition-colors group">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-1 w-full">
                <div className="flex flex-col justify-between flex-1 gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-sans text-ui-label-sm text-on-surface-variant uppercase tracking-wider">
                        {item.publisher?.split(',')[0]}
                      </span>
                      <span className="font-sans text-ui-label-sm text-outline ml-2">
                        By {item.author}
                      </span>
                      <div className="flex gap-2">
                        {item.tags.split(',').map((tag, index) => {
                            const randomStyle = tagStyles[Math.floor(Math.random() * tagStyles.length)];
                            return(
                              <span 
                                key={index} 
                                className={`px-2 py-0.5 rounded font-sans text-ui-label-sm ${randomStyle}`}>
                                {tag.trim()}
                              </span>
                          )})}
                      </div>
                    </div>
                    <h2 className="font-serif text-headline-md text-on-surface leading-tight">
                      {item.title}
                    </h2>    
                    <p className="font-serif text-body-md text-on-surface-variant line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-sans text-caption text-outline">
                      published {item.date}
                    </span>
                    
                    <div className="flex gap-2">
                      <button onClick={(e) => handleIconClick(e, () => isBookmarked ? onUnsave(item.id) : onSave(item))} 
                              aria-label="Save" className="p-1 transition-colors text-outline hover:text-on-surface">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>
                          bookmark
                        </span>
                      </button>
                      <button aria-label="Share" className="p-1 text-outline hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-[20px]">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
              <button className="absolute top-2 right-2 p-1 text-outline hover:text-on-surface transition-opacity opacity-60">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default NewsFeed;