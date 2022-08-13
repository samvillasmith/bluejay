import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput} from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import PostDetails from '../../screens/postDetails';
  import Home from '../../screens/Home';
  import BottomTabNav from './BottomTabNavigator';

const Route =()=>{
const Stack = createStackNavigator();

  return (
   <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          cardStyle: {
            backgroundColor:"#fec85c60",
            },
          }}>
            <Stack.Screen name='Home' 
            component={BottomTabNav} 
            options={{headerShown: false}}/>
            <Stack.Screen name= 'PostDetails'
             component={PostDetails} 
             options={{headerShown: false}}/>
        </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Route;