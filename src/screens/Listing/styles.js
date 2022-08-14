import { StyleSheet } from "react-native";
import { colors } from "../../../model/color";

const styles = StyleSheet.create({
    inputTextStyle:{
      fontSize: 22,
      paddingRight: 7,
      alignItems: 'center',
      justifyContent: 'center'
    },
    descriptionTextStyle:{
      fontSize: 22,
      paddingRight: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 50, 
      fontSize: 20, 
      marginLeft: 1
    },
    viewInputStyle:{
      flexDirection: 'row', 
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      margin: 10,
      paddingVertical: 10,
      borderRadius: 30,
      padding: 5,
      paddingLeft: 20
    },
    shortField:{
      flexDirection: 'row', 
      backgroundColor: colors.white,
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
      margin: 10,
      paddingVertical: 10,
      borderRadius: 30,
      padding: 5,
      width: '50%'
      },
      categoryStyle:{
          flexDirection: 'row', 
          backgroundColor: colors.white,
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          margin: 10,
          paddingVertical: 10,
          borderRadius: 30,
          paddingLeft: 20,
          paddingRight: 10
      },
      locationInputStyle:{
        flexDirection: 'row', 
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 30,
        padding: 5
      },
    });
export default styles;