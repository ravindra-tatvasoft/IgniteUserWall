import React, { } from "react"
import { } from "react-native"
import { ImageProps } from './image.props'
import { imageStyles as styles } from "./image.styles"
import FastImage from 'react-native-fast-image'
import { images } from "./img"

export function Image(props: ImageProps) {
  const { style, url, rotate, contain, cover, stretch, center, image } = props

  const combineStyle = [
    styles.DEFAULT_STYLE,
    style && style,
    rotate && { transform: [{ rotate: rotate + 'deg' }] }
  ]
  /**
   *  Image resize type
   */
  const resizeType = contain != null ? FastImage.resizeMode.contain :
    center != null ? FastImage.resizeMode.center :
      stretch != null ? FastImage.resizeMode.stretch :
        cover != null ? FastImage.resizeMode.cover : FastImage.resizeMode.contain

  const isNullImage = url ? isEmpty(url) : image ? isEmpty(image) : true
  /**
   * Check image or source is empty or not
   */
  function isEmpty(image: string) {
    return image && image.trim().length <= 0
  }

  return (
    <FastImage
      style={combineStyle}
      source={isNullImage ? images['placeholder'] : url ? { uri: url } : images[image]}
      resizeMode={resizeType}
    />
  )
}
