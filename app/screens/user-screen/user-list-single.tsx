import React, { FunctionComponent } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View ,FlatList} from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Text } from "../../components"
 

/**
 *  NOTE : Do not check this file
 */
export interface UserListSingleProps {
  navigation?: NativeStackNavigationProp<ParamListBase>,
  userList: any,
  onPress: any,
}

const FLAT_LIST: ViewStyle = { padding: 10,flex:1   }
 

export const UserListSingle: FunctionComponent<UserListSingleProps> = observer(props => {
  const { userList } = props
  console.log(userList)
  
  return (
    <FlatList
    style={FLAT_LIST}
    data={userList}
    renderItem={({ item, index }) =>
      <UserListSingle item={item} index={index} />
    }
    keyExtractor={(item, index) => index.toString()}
  />
  )
})
