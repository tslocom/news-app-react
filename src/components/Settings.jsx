import { useEffect, useState } from "react";
import { getFollowedPublications, removeFollowedPublication } from "../services/publicationServices";
import { getFollowedTags, removeFollowedTag, getIgnoredTags, removeIgnoredTag } from "../services/tagServices";
import PreferencesOverlay from "./PreferencesOverlay";

function Settings() {
    const [followedPublications, setFollowedPublications] = useState([]);
    const [followedTags, setFollowedTags] = useState([]);
    const [ignoredTags, setIgnoredTags] = useState([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState("");

    useEffect(() => {
        getFollowedPublications().then(setFollowedPublications)
    }, []);
    useEffect(() => {
        getFollowedTags().then(setFollowedTags);
    }, []);
    useEffect(() => {
        getIgnoredTags().then(setIgnoredTags);
    }, []);

    const onUnfollow = async (list, id) => {
        const unfollowedTagId = await list(id);
        if (unfollowedTagId) {
            setFollowedTags(prevTags =>
                prevTags.filter(tag => tag.id !== unfollowedTagId)
            );
        }
    }

    const handleClick = (list) => {
        setIsOverlayOpen(list)
    }

    return (
        <div className="w-full">
            <PreferencesOverlay isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen}/>
            <section className="mb-12">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant">
                    <h3 className="font-serif text-[24px] font-semibold text-on-background">Followed Publications</h3>
                    <button onClick={() => handleClick("publications")}
                            className="flex items-center gap-1 font-sans font-semibold text-[14px] text-primary hover:underline transition-all">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        <span>Add More</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {followedPublications.map(item => (
                        <div key={item.id} className="bg-blue-50 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-2 transition-all hover:border-error group">
                            <span className="font-sans font-medium text-[12px] text-blue-800">{item.name}</span>
                            <button
                                type="button"
                                onClick={() => onUnfollow(removeFollowedPublication, item.id)}
                                className="material-symbols-outlined text-[16px] text-blue-800/60 group-hover:text-error transition-colors">
                                close
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-12">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant">
                    <h3 className="font-serif text-[24px] font-semibold text-on-background">Followed Tags</h3>
                    <button onClick={() => handleClick("followedTags")}
                            className="flex items-center gap-1 font-sans font-semibold text-[14px] text-primary hover:underline transition-all">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        <span>Add More</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {followedTags.map(item => (
                        <div key={item.id} className="bg-green-50 border border-green-200 px-3 py-1 rounded-full flex items-center gap-2 transition-all hover:border-error group">
                            <span className="font-sans font-medium text-[12px] text-green-800">{item.name}</span>
                            <button
                                type="button"
                                onClick={() => onUnfollow(removeFollowedTag, item.id)}
                                className="material-symbols-outlined text-[16px] text-green-800/60 group-hover:text-error transition-colors">
                                close
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-12">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant">
                    <h3 className="font-serif text-[24px] font-semibold text-on-background">Ignored Tags</h3>
                    <button onClick={() => handleClick("ignoredTags")}
                            className="flex items-center gap-1 font-sans font-semibold text-[14px] text-primary hover:underline transition-all">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        <span>Add More</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {ignoredTags.map(item => (
                        <div key={item.id} className="bg-red-50 border border-red-200 px-3 py-1 rounded-full flex items-center gap-2 transition-all hover:border-error group">
                            <span className="font-sans font-medium text-[12px] text-red-800">{item.name}</span>
                            <button
                                type="button"
                                onClick={() => onUnfollow(removeIgnoredTag, item.id)}
                                className="material-symbols-outlined text-[16px] text-red-800/60 group-hover:text-error transition-colors">
                                close
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Settings