import { useState, useEffect } from 'react';

/**
 * Custom hook to detect media query breakpoints
 * @param {number} breakpoint - The breakpoint width in pixels (default: 768)
 * @returns {boolean} - True if viewport width is <= breakpoint
 *
 * @example
 * const isMobile = useMediaQuery(768);
 * const isTablet = useMediaQuery(1024);
 */
const useMediaQuery = (breakpoint = 768) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkMedia = () => {
      setMatches(window.innerWidth <= breakpoint);
    };

    // Initial check
    checkMedia();

    // Add event listener
    window.addEventListener('resize', checkMedia);

    // Cleanup
    return () => window.removeEventListener('resize', checkMedia);
  }, [breakpoint]);

  return matches;
};

export default useMediaQuery;
