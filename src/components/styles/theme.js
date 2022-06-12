const lightColors = {
    bgColor: "#F2F2F2",
    side: "#F2CB05",
    baseColor: "#0D0D0D",
    mainColor1: "#F29F05",
    yellow: "#D92B04",
    errorColor: "#f2dc6d",
};

const darkColors = {
    bgColor: "#0D0D0D",
    side: "#404040",
    baseColor: "#D9D4D0",
    mainColor1: "#0378A6",
    yellow: "#F2CB05",
    errorColor: "#f2dc6d",
};

const device = {
    laptop: "(max-width:1025px)",
};

export const lightTheme = {
    theme: "light",
    colors: lightColors,
    device,
};
export const darkTheme = {
    theme: "dark",
    colors: darkColors,
    device,
};
