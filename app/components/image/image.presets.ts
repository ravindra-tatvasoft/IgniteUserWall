import FastImage, { FastImageProps } from "react-native-fast-image"

export const presets = {
    /**
     * Image contain
     */
    contain : {resizeMode : FastImage.resizeMode.contain} as FastImageProps,

    /**
     * Image cover view
     */
    cover : {resizeMode : FastImage.resizeMode.cover} as FastImageProps
}

/**
 * A list of preset names.
 */
export type ImagePresets = keyof typeof presets