import { ImageStyle } from "react-native"
import { ImagePresets } from "./image.presets";
import { ImageTypes } from './img'

export interface ImageProps {
    /**
     * Style overrides for the icon image
     */
    style?: ImageStyle

    /**
     *  Image Rotate
     */
    rotate?: number

    /**
     * Image Url
     */
    url?: string

    /**
     *  Image source
     */
    image?: ImageTypes

    /**
     *  Image resize in center
     */
    center?: boolean

    /**
     *  Image cover view
     */
    cover?: boolean

    /**
     * Image contain
     */
    contain?: boolean

    /**
     * Image stretch
     */
    stretch?: boolean

    /**
    * One of the different types of image presets.
    */
    preset?: ImagePresets
}
