import { constants } from "../theme";
import { widthPercentageToDP as wp  } from "../utils/responsive-screen";

export const fontSize = {
    FONT_P16x : constants.isAndroid ? wp('3.4%') :wp('3.8%'),
    FONT_P14x : constants.isAndroid ? wp('3.2%') :wp('3.6%'),
    FONT_P12x : constants.isAndroid ? wp('2.8%') :wp('3.2%'),
}