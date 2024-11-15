const BG_RATIO = 3;
const TEXT_RATIO = 4.5;
const BASE_BACKGROUND = '#000'

function CorrectColorForRatio(originalColor, stableColor, goalRatio) {
    // (lighter +.05) / (darker + .05) = contrast ratio
    //handle errors
    
    // find ogcolor luminancse
    // find stable color luminance
    // Compare
    // if original is lighter
        // find needed luminance for originalColor
        // needed lum = (stable luminance +.05 * goalRatio) - .05
    // else
        // needed lum = (goal ratio / stable luminance +.05) - .05
    //  return color with luminance set to needed lum
}

document.querySelectorAll('*').array.forEach(element => {
    // Create chroma color for background
    // Create chroma color for text
    // Get correct background color
    // Get correct text color
    // set colors
 
});    
