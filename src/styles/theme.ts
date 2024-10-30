import { Theme } from "@/types"

export const lightTheme: Theme = {
    appBackground: "#FFF",
    appColor: "#000",
    appDefaultStroke: "#E0E0E0",
    appLogo: "dnc-logo-black.svg",
    appSkeletonFrom: "#EEE",
    appSkeletonTo: "#CCC",
    button: {
        aler: "#E80000",
        alertColor: "#FFF",
        alertHover: "#D80000",
        disabled: "#CCC",
        disabledColor: "#666",
        primary: "#0C70F2",
        primaryColor: "#FFF",
        primaryHover: "#0061DE",
    },
    card: {
        aler: "#E80000",
        background: "#FFF",
        border: "#E0E0E0",
        sucess: "#008000",
        warning: "#F7A300",
    },
    textInput: {
        active: "#FFF",
        activeColor: "#000",
        borderColor: "#E0E0E0",
        disabled: "#EEE",
        disabledBorderColor: "#E0E0E0",
        disabledColor: "#666",
        placeHolderColor: "#666",
    },
    typographies: {
        error: "#FF0202",
        subtitle: "#666",
        sucess: "#008000",
    }
}

export const darkTheme: Theme = {
    appBackground: "#060B26",
    appColor: "#FFF",
    appDefaultStroke: "#21497D",
    appLogo: "dnc-logo-white.svg",
    appSkeletonFrom: "#060B26",
    appSkeletonTo: "#21497D",
    button: {
        aler: "#E80000",
        alertColor: "#FFF",
        alertHover: "#D80000",
        disabled: "#313649",
        disabledColor: "#6D7B8E",
        primary: "#0C70F2",
        primaryColor: "#FFF",
        primaryHover: "#0061DE",
    },
    card: {
        aler: "#E80000",
        background: "#0F1535",
        border: "#21497D",
        sucess: "#008000",
        warning: "#F7A300",
    },
    textInput: {
        active: "#0F1535",
        activeColor: "#FFF",
        borderColor: "#21497D",
        disabled: "#282D49",
        disabledBorderColor: "#2E3F55",
        disabledColor: "#58677C",
        placeHolderColor: "#89A7CE",
    },
    typographies: {
        error: "#FF0202",
        subtitle: "#89A7CE",
        sucess: "#008000",
    }
}