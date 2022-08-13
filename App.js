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
  import Home from './src/screens/postDetails';
  import PostItems from './src/components/postItems';
  import HeaderForMobile from './src/components/HeaderForMobile';
  import Route from './src/components/navigation/Router';
  import 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewforDroid}>
      <StatusBar style="auto" backgroundColor="#9ee8ff"/>
      <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewforDroid: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    backgroundColor: colors.background
  },
});
