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
  import { colors } from '../../../model/color';
  import SelectPhotosScreen from '../../screens/selectPhotos'
  import SelectCategoryScreen from '../../screens/selectCategory'
  import SelectLocationScreen from '../../screens/selectLocation';

const Route =()=>{
const Stack = createStackNavigator();

  return (
   <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.altenate
            },
          }}>
            <Stack.Screen name='Home' 
            component={BottomTabNav} 
            options={{headerShown: false}}/>

            <Stack.Screen name= 'PostDetails'
             component={PostDetails} 
             options={{headerShown: false}}/>

            <Stack.Screen name='SelectCategory' 
            component={SelectCategoryScreen} 
            options={{headerShown: false}}/>

             <Stack.Screen name= 'SelectPhoto'
             component={SelectPhotosScreen} 
             options={{headerShown: false}}/>

            <Stack.Screen name= 'SelectLocation'
             component={SelectLocationScreen} 
             options={{headerShown: false}}/>


        </Stack.Navigator>
   </NavigationContainer>
  );
};

export default Route;