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

const Route =()=>{
const Stack = createStackNavigator();

  return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name= 'PostDetails' component={PostDetails}/>
        </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Route;