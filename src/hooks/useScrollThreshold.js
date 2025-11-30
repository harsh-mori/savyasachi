import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when scroll position crosses a threshold
 * @param {number} threshold - The scroll position threshold in pixels (default: 100)
 * @returns {boolean} - True if scrollY > threshold
 *
 * @example
 * const showBreadcrumb = useScrollThreshold(100);
 * const showHeader = useScrollThreshold(50);
 */
const useScrollThreshold = (threshold = 100) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAboveThreshold(window.scrollY > threshold);
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isAboveThreshold;
};

export default useScrollThreshold;
