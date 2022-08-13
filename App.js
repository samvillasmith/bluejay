import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput} from 'react-native';
  import { colors } from './model/color';
  import PostItems from './src/components/postItems';
  import HeaderForMobile from './src/components/HeaderForMobile';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewforDroid}>
      <HeaderForMobile />
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    backgroundColor: colors.secondary
  },
  postWrap: {
    display: "flex", 
    flexDirection: "row", 
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.black,
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
        color: colors.primary, 
        backgroundColor: colors.background,
        alignSelf: "flex-start", 
        padding: 5, 
        borderRadius: 10,
        overflow: 'hidden',
  },
  postTitle: {
    color: colors.grey,
  },
  SafeAreaViewforDroid: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    backgroundColor: colors.background
  },
});
