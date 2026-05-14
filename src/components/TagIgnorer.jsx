import { getTags, getFollowedTags, getIgnoredTags, addIgnoredTag, removeIgnoredTag } from '../services/tagServices.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TagIgnorer() {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        getTags().then(setTags)
    }, []);

    const [followedTags, setFollowedTags] = useState([]); 
    useEffect(() => {
        getFollowedTags().then(setFollowedTags);
    }, []);

    const [ignoredTags, setIgnoredTags] = useState([]);
    useEffect(() => {
        getIgnoredTags().then(setIgnoredTags);
    }, []);

    const onIgnore = (item) => {
        addIgnoredTag(item).then(returnedItem => {
            if (returnedItem) {
            setIgnoredTags(prevTags => [...prevTags, item])}})}

    const onUnignore = async (id) => {
        const unignoredTagId = await removeIgnoredTag(id);
        if (unignoredTagId) {
            setIgnoredTags(prevTags =>
                prevTags.filter(tag => tag.id !== unignoredTagId)
            );
        }
    }

    
    return (
            <div className="flex-grow flex items-center justify-center px-margin py-12">
                <div className="max-w-[680px] w-full">
                    <header className="mb-12 text-center">
                        <h1 className="font-serif text-[64px] md:text-[80px] leading-none font-black tracking-tighter text-on-surface mb-4">Ignore Tags</h1>
                        <p className="font-serif text-[22px] md:text-[26px] leading-snug font-semibold text-on-surface-variant">Select topics you want to avoid.</p>
                    </header>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {tags
                            .filter(item => !followedTags.some(followed => followed.id === item.id))
                            .map(item => {
                                const isIgnored = ignoredTags.some(tag => tag.id === item.id)
                                return (
                                    <button
                                        key={item.id}
                                        type='button'
                                        className={`flex items-center gap-2 px-6 py-4 rounded-full border-2 transition-all transform hover:scale-105 active:scale-95 font-ui-label-bold text-ui-label-bold ${
                                            isIgnored 
                                            ? 'border-red-600 bg-red-50 text-red-700' 
                                            : 'border-outline-variant bg-white text-on-surface-variant hover:border-red-600 hover:text-red-700'
                                        }`}
                                        aria-pressed={isIgnored}
                                        onClick={() => (isIgnored ? onUnignore(item.id) : onIgnore(item))}
                                    >
                                        {item.name}
                                        <span className={`material-symbols-outlined ${isIgnored ? 'text-red-600' : 'text-outline-variant'}`}>
                                            {isIgnored ? 'cancel' : 'add_circle'}
                                        </span>
                                    </button>
                                )
                        })}
                    </div>
                </div>
            </div>
        )
}

export default TagIgnorer