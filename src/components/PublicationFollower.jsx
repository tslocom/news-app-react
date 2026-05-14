import { getPublications, getFollowedPublications, addFollowedPublication, removeFollowedPublication } from '../services/publicationServices.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function PublicationFollower() {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        getPublications().then(setPublications)
    }, []);

    const [followedPublications, setFollowedPublications] = useState([]);
    useEffect(() => {
        getFollowedPublications().then(setFollowedPublications);
    }, []);

    const onFollow = (item) => {
        addFollowedPublication(item).then((returnedItem) => {
            if (returnedItem) {
            setFollowedPublications(prevPubs => [...prevPubs, item])}})}
    

    const onUnfollow = async (id) => {
        const unfollowedPublicationId = await removeFollowedPublication(id);
        if (unfollowedPublicationId) {
            setFollowedPublications(prevPubs =>
                prevPubs.filter(pub => pub.id !== unfollowedPublicationId)
            );
        }
    }


    return (
            <div className="flex-grow flex items-center justify-center px-margin py-12">
                <div className="max-w-[680px] w-full">
                    <header className="mb-12 text-center">
                        <h1 className="font-serif text-[64px] md:text-[80px] leading-none font-black tracking-tighter text-on-surface mb-4">Follow Sources</h1>
                        <p className="font-serif text-[22px] md:text-[26px] leading-snug font-semibold text-on-surface-variant">Select publications to follow.</p>
                    </header>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {publications.map(item => {
                            const isFollowed = followedPublications.some(pub => pub.id === item.id)
                            return (
                                <button
                                    key={item.id}
                                    type='button'
                                    className={`flex items-center gap-2 px-6 py-4 rounded-full border-2 transition-all transform hover:scale-105 active:scale-95 font-ui-label-bold text-ui-label-bold ${
                                        isFollowed 
                                        ? 'border-blue-600 bg-blue-50 text-blue-700' 
                                        : 'border-outline-variant bg-white text-on-surface-variant hover:border-blue-600 hover:text-blue-700'}`}
                                    aria-pressed={isFollowed}
                                    onClick={() => (isFollowed ? onUnfollow(item.id) : onFollow(item))}>
                                    {item.name}
                                    <span className={`material-symbols-outlined ${isFollowed ? 'text-blue-600' : 'text-outline-variant'}`}>
                                        {isFollowed ? 'star' : 'add_circle'}
                                    </span>
                                </button>
                            )})}
                    </div>
                </div>
            </div>
        )
}

export default PublicationFollower