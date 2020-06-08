import React, { useEffect, FunctionComponent as Component, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, FlatList, Alert, View, } from "react-native"
import { Screen, Text } from "../../components"
import { useStores } from "../../models/root-store"
import { styleApp, dimens, } from "../../theme"
import { UserList } from './user-list'
import { constants } from "../../utils"
import { useSafeArea } from "react-native-safe-area-context"

const FLAT_LIST_CONTAINER: ViewStyle = { flex: 1, }
var isEndReached = false;
export const UserScreen: Component = observer(function UserScreen() {
  const { userStore } = useStores()
  const insets = useSafeArea()
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    userStore.users(pageNumber * constants.pageOffset)
  }, [pageNumber])

  /**
   *  Load new image when user reached end of list
   */
  function onLoadMore() {
    if (userStore.hasMoreUser) {
      setPageNumber(pageNumber+1)
    }  
  }

  /**
   *  Divider for image flatlist
   */
   function imageDivider () {
    return (<View style={[styleApp.dividerH,{marginTop :dimens.w3}]} />)
  }

  function footerComponent(){
    return(<View style={{paddingBottom :insets.bottom}}/>)
  }
  return (
    <Screen statusBar={"dark-content"} style={styleApp.container} preset="fixed">
      <FlatList
        style={[FLAT_LIST_CONTAINER ]}
        data={userStore.userData}
        onEndReachedThreshold={1}
        onMomentumScrollBegin={() => {
          isEndReached = false
        }}
        onEndReached={({ distanceFromEnd }) => {
          if (!isEndReached) {
            // onLoadMore()
            isEndReached = true
          }
        }}
        renderItem={({ item, index }) =>
          <UserList item={item} index={index} />
        }
        ListFooterComponent={footerComponent}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={imageDivider}
      />
    </Screen>
  )
})
