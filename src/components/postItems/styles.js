import { StyleSheet } from "react-native";
import { colors } from "../../../model/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9ee8ff"
      },
      postWrap: {
        display: "flex", 
        flexDirection: "row", 
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.8,
        elevation: 5
      },
      postImage: {
          height: 100, 
          width: 100, 
          borderRadius: 30, 
          marginLeft: 10, 
          marginRight: 20,
          marginVertical: 10
    },
      postContentWrap: {
          justifyContent: "space-around", 
          paddingVertical: 10,
      },
      postValue: {
            color: "#7ae0ff", 
            backgroundColor: colors.black,
            alignSelf: "flex-start", 
            padding: 5, 
            borderRadius: 10,
            overflow: 'hidden',
      },
      postTitle: {
        color: "grey",
      },
      SafeAreaViewforDroid: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
      },
    });
export default styles;