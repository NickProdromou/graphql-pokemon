import {
    fontFamilyDefault,
    fontSizes,
    lineHeight,
    breakpoints
} from "../variables";

const mediaQuery = (breakpoint, styleString) => {
    if (typeof styleString && typeof breakpoint !== "string") {
        return false;
    }

    switch (breakpoint) {
        case "small":
            return `@media (min-width: ${breakpoints.small}) {
                ${styleString}
            }`;

        case "medium":
            return `@media (min-width: ${breakpoints.medium}) {
                ${styleString} 
            }`;

        case "large":
            return `@media (min-width: ${breakpoints.large}) {
                ${styleString} 
            }`;

        case "xlarge":
            return `@media (min-width: ${breakpoints.extraLarge}) {
                ${styleString} 
            }`;

        default:
            return false;
    }
};

const type = input =>
    `font: ${fontSizes[input]}/${lineHeight[input]} ${fontFamilyDefault};`;

export { type, mediaQuery };
