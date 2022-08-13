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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../../model/color';
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const BottomTabNav =()=>{
const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
        // tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {backgroundColor: colors.primary,
        height: 50,
        paddingBottom: 2,
        paddingTop: 2,}
    }}
    sceneContainerStyle={{backgroundColor: colors.primary}}>
        <Tab.Screen 
        name={"Explore"} 
        component={Home}
        options={{
            tabBarIcon:({color})=>(
            <FontAwesome name="home" size={25} color={colors.secondary} />
            ),
            headerShown: false
        }}
        />

        <Tab.Screen 
        name={"Listing"} 
        component={PostDetails}
        options={{
            tabBarIcon:({color})=>(
            <FontAwesome5 name="clipboard-list" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

        <Tab.Screen 
        name={"Chat"} 
        component={Home}
        options={{
            tabBarIcon:({color})=>(
            <Ionicons name="chatbox" size={24} color="black" />
            ),
            headerShown: false
        }}
        />

        <Tab.Screen 
        name={"Profile"} 
        component={Home}
        options={{
            tabBarIcon:({color})=>(
            <FontAwesome name="user" size={24} color="black" />
            ),
            headerShown: false
        }}
        />
       

    </Tab.Navigator>
  );
};

export default BottomTabNav;