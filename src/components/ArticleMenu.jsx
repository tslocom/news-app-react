import './ArticleMenu.css';
import { useState } from 'react';
import { useEffect } from 'react';

function ArticleMenu({ item, isOpen, toggleMenu, onSave }) {
    const options = [
        { id: 'save', label: 'Bookmark', action: () => onSave(item) },
        { id: 'share', label: 'Share', action: () => console.log('Share') },
        { id: 'hide', label: 'Hide', action: () => console.log('Hide') },
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
                {options.map((opt) => (
                    <li 
                        key={opt.id}
                        onClick={() => opt.action(item)}
                        >{opt.label}</li>
                ))}
            </ul>}
        </div>
    )
}

export default ArticleMenu;