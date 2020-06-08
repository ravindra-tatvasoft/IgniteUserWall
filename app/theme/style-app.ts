import { StyleSheet, ViewStyle  } from "react-native";
import { constants } from "../theme";

type Styles = {
    container : ViewStyle;
    dividerH :ViewStyle;
    viewPadding : ViewStyle;
    viewPaddingH : ViewStyle;
}

export const styleApp = StyleSheet.create<Styles>({
    container: {
        flex: 1,   backgroundColor: 'white' 
    },
    dividerH :{
        width :'100%',height :  0.5 , backgroundColor :'gray' 
    },
    viewPadding :{
        padding : constants.viewPadding
    },
    viewPaddingH :{
        paddingHorizontal  : constants.viewPaddingH
    }
})