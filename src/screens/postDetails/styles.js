import { StyleSheet } from "react-native";
import { colors } from "../../../model/color";

const styles = StyleSheet.create({
    ratesStyle:{
        margin: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: colors.grey,
        paddingVertical: 20,
        borderTopColor: colors.grey}
    }
);

export default styles;