
// This file creates redirects to system fonts since we can't include the actual font files
// In a production app, you would actually include the font files in your public/fonts directory

export const loadFonts = () => {
  // This is just a placeholder function - in a real app you would:
  // 1. Include actual font files in the public/fonts directory
  // 2. Use the FontLoader from three.js to load them
  // 3. Return the loaded fonts for use in 3D text
  
  console.log('Font loading is being simulated. For a production app, include actual font files.');
  
  return {
    // These are simulated font references since we can't include the actual font files
    // In production, replace these with actual loaded fonts
    standard: null,
    bold: null,
    mono: null
  };
};
