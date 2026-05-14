import { getTags, getFollowedTags, addFollowedTag, removeFollowedTag } from '../services/tagServices.js'
import { useEffect, useState } from 'react';

function TagFollower() {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        getTags().then(setTags)
    }, []);

    const [followedTags, setFollowedTags] = useState([]);
    useEffect(() => {
        getFollowedTags().then(setFollowedTags);
    }, []);

    const onFollow = (item) => {
        addFollowedTag(item).then((returnedItem) => {
            if (returnedItem) {
            setFollowedTags(prevTags => [...prevTags, item])}})}
    

    const onUnfollow = async (id) => {
        const unfollowedTagId = await removeFollowedTag(id);
        if (unfollowedTagId) {
            setFollowedTags(prevTags =>
                prevTags.filter(tag => tag.id !== unfollowedTagId)
            );
        }
    }

    return (
        <div className="flex-grow flex items-center justify-center px-margin py-12">
            <div className="max-w-[680px] w-full">
                    <header className="mb-12 text-center">
                        <h1 className="font-serif text-[64px] md:text-[80px] leading-none font-black tracking-tighter text-on-surface mb-4">Follow Tags</h1>
                        <p className="font-serif text-[22px] md:text-[26px] leading-snug font-semibold text-on-surface-variant">Select topics to follow.</p>
                    </header>
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tags.map(item => {
                        const isFollowed = followedTags.some(tag => tag.id === item.id)
                        return (
                            <button
                                key={item.id}
                                type='button'
                                className={`flex items-center gap-2 px-6 py-4 rounded-full border-2 transition-all transform hover:scale-105 active:scale-95 font-ui-label-bold text-ui-label-bold ${
                                    isFollowed 
                                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                                    : 'border-outline-variant bg-white text-on-surface-variant hover:border-emerald-600 hover:text-emerald-700'
                                }`}
                                aria-pressed={isFollowed}
                                onClick={() => (isFollowed ? onUnfollow(item.id) : onFollow(item))}>
                                {item.name}
                                <span className={`material-symbols-outlined ${isFollowed ? 'text-emerald-600' : 'text-outline-variant'}`}>
                                    {isFollowed ? 'check_circle' : 'add_circle'}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TagFollower