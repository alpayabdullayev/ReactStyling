import { useState, useEffect } from 'react';

function useDarkmode() {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : false
    );

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem('darkMode',JSON.stringify(isDarkMode));
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
    

    return [isDarkMode,toggleDarkMode];
}

export default useDarkmode;