import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput,
  Pressable} from 'react-native';
  import { withAuthenticator } from 'aws-amplify-react-native';
  import { Auth } from 'aws-amplify';
  import { colors } from '../../../model/color';
  import { MaterialCommunityIcons } from '@expo/vector-icons';

const Listing =()=>{
  Auth.currentAuthenticatedUser().then((user)=>{
    console.log(user.attributes.email)
  }).catch((err)=>{
    console.log(err)
    throw err;
  })

  return (
   <View>
    <View>
      <Pressable>
      <MaterialCommunityIcons name="home-group-plus" size={24} color="black" />
      </Pressable>
    </View>
    <Text>Images</Text>
    <Text>Category</Text>
    <Text>Location</Text>
    <Text>Description</Text>
    <Text>Value</Text>
   </View>
  );
};

export default withAuthenticator(Listing);