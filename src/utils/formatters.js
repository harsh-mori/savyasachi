/**
 * Utility functions for formatting data
 */

/**
 * Format a number with leading zeros
 * @param {number} num - The number to format
 * @param {number} digits - Number of digits (default: 2)
 * @returns {string} - Formatted number
 *
 * @example
 * formatNumber(1) // "01"
 * formatNumber(5, 3) // "005"
 */
export const formatNumber = (num, digits = 2) => {
  return String(num).padStart(digits, '0');
};

/**
 * Format phone number
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhone = (phone) => {
  // Add formatting logic if needed
  return phone;
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};
