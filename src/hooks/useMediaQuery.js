import { useState, useEffect, useCallback } from 'react';

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (e) => setMatches(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
};

export const useIsMobile = (breakpoint = 768) => {
    return useMediaQuery(`(max-width: ${breakpoint}px)`);
};

export const useIsTablet = () => {
    return useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
};

export const useIsDesktop = () => {
    return useMediaQuery('(min-width: 1025px)');
};

export default useMediaQuery;
