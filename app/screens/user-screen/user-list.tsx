import React, { FunctionComponent } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, ImageStyle } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Text, Image } from "../../components"
import { dimens, constants, styleApp } from "../../theme"
import { User } from "../../services/api"


export interface UserListProps {
  navigation?: NativeStackNavigationProp<ParamListBase>,
  item: any,
  onPress: any,
  index: any
}

//Image size manage
const imageMargin = dimens.w3;
const imageWidth = (constants.screenWidth - (constants.viewPadding * 2))
const imageHeight = imageWidth * 0.5
const imageWidthRow2 = imageHeight

// Styles
const FLAT_LIST: ViewStyle = { ...styleApp.viewPaddingH }
const ROW_1: ImageStyle = { width: imageWidth, height: imageHeight, }
const ROW_2: ImageStyle = { width: imageWidthRow2, height: imageWidthRow2, flex: 1, }
const ROW_2_FIRST: ImageStyle = { ...ROW_2, marginEnd: imageMargin }
const USER_IMG: ImageStyle = { width: dimens.w10, height: dimens.w10, borderRadius: dimens.w5 }
const NAME: TextStyle = { marginHorizontal: dimens.w3, }
const MARGIN_TOP_IMG_HEAD = { marginTop: imageMargin }
const USER_HEADER: ViewStyle = { ...MARGIN_TOP_IMG_HEAD, flexDirection: 'row', alignItems: 'center' }
const ROOT_1_IMG: ViewStyle = { ...MARGIN_TOP_IMG_HEAD, flex: 1 }
const ROOT_2_IMG: ViewStyle = { ...MARGIN_TOP_IMG_HEAD, flexDirection: 'row' }

/**
 * Setting image style according to row type.
 */
function prepareImage(rowType: number, imageUrl: string, rowItemIndex: number) {
  return (<Image cover
    style={rowType == 0 ? ROW_1 : rowType == 1 ? rowItemIndex % 2 != 0 ? ROW_2 : ROW_2_FIRST : USER_IMG}
    url={imageUrl}
  />)
}

/**
 * Generate row according to odd/event
 */
function genearateRow(item: User) {
  //var totalImage = Math.floor(Math.random() * 5) + 1;
  var totalImage = item.items.length;
  var totalRow = Math.round(totalImage / 2);
  let imageRows = []
  var count = 0;
  for (let i = 0; i < totalRow; i++) {
    if (totalImage % 2 != 0 && i == 0) {
      imageRows.push(<View style={ROOT_1_IMG}>
        {prepareImage(0, item.items[count], i)}
      </View>)
      count++;
    } else {
      var singleRow = Math.round(totalImage / totalRow);
      var twoImage = []
      for (let j = 0; j < singleRow; j++) {
        twoImage.push(prepareImage(1, item.items[count], j))
        count++;
      }
      imageRows.push(<View style={ROOT_2_IMG}>
        {twoImage}
      </View>)
    }
  }
  return (<View>{imageRows}</View>)
}

export const UserList: FunctionComponent<UserListProps> = observer(props => {
  const { item, index } = props
  return (
    <View key={index} style={FLAT_LIST}>
      {/** User details header */}
      <View style={USER_HEADER}>
        {prepareImage(2, item.image, 0)}
        <Text style={NAME} >{item.name} </Text>
      </View>
      {/** User images */}
      {genearateRow(item)}
    </View>
  )
})
