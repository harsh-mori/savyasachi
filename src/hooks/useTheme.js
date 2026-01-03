import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'theme';
const DARK_CLASS = 'dark-mode';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        return localStorage.getItem(THEME_KEY) || 'light';
    });

    useEffect(() => {
        const root = document.body;
        if (theme === 'dark') {
            root.classList.add(DARK_CLASS);
        } else {
            root.classList.remove(DARK_CLASS);
        }
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }, []);

    const isDark = theme === 'dark';

    return { theme, toggleTheme, isDark };
};

export default useTheme;
