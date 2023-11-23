import React from 'react';
import style from './index.module.scss';
import useDarkmode from '../hooks/useDarkmode';

function Card() {
    const [isDarkMode, toggleDarkMode] = useDarkmode();

    const handleClickDark = () => {
        toggleDarkMode();
    };

    return (
        <div>
            <div className={`${style.container} ${style.card}`}>
                <button onClick={handleClickDark}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
}

export default Card;