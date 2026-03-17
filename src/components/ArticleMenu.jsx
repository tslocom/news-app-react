import './ArticleMenu.css';
import { useState } from 'react';
import { useEffect } from 'react';

function ArticleMenu({ item, isOpen, toggleMenu, onSave, onUnsave, isSaved }) {
    const options = [
        { id: 'save', label: 'Bookmark', action: () => onSave(item), show: !isSaved },
        { id: 'share', label: 'Share', action: () => console.log('Share'), show: true },
        { id: 'hide', label: 'Hide', action: () => console.log('Hide'), show: true },
        { id: 'unsave', label: 'Remove Bookmark', action: () => onUnsave(item.id), show: isSaved }
    ]    
    useEffect(() => {
        if (!isOpen) return;
        const handleGlobalClick = () => toggleMenu();
        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);}, 
        [isOpen, toggleMenu]);
    return (
        <div className='article-menu'>
            <button
                onClick={(e) => 
                    {e.stopPropagation(); 
                    toggleMenu()}}
                >***</button>
            {isOpen && <ul>
                {options
                    .filter(opt => opt.show === true)
                    .map((opt) => (
                    <li 
                        key={opt.id}
                        onClick={() => opt.action()}
                        >{opt.label}</li>
                ))}
            </ul>}
        </div>
    )
}

export default ArticleMenu;