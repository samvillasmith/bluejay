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
  import { Ionicons } from '@expo/vector-icons';
  import { Entypo } from '@expo/vector-icons';
  import styles from './styles';
  import { ScrollView } from 'react-native-gesture-handler';
  import { FontAwesome5 } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native' 
 

const Listing =()=>{
  const navigation = useNavigation()
  Auth.currentAuthenticatedUser().then((user)=>{
    console.log(user.attributes.email)
  }).catch((err)=>{
    console.log(err)
    throw err;
  })

  return (
  <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
   <View>
      <View style={{margin: 5}}>
        <View>
        <Text style={{marginTop: 10}}>Upload Property Images</Text>

        <Pressable 
        style={{
          justifyContent: 'center', 
          alignItems: 'center',
          margin: 20, 
          height: 150,
          marginVertical: 20, 
          width: 150,
          borderWidth: 1, 
          borderStyle: 'dashed',
          backgroundColor: colors.white,
          borderRadius: 30,
          display: 'flex'
          }}
          onPress={()=>{
          navigation.navigate("SelectPhoto")
        }}>

        <MaterialCommunityIcons name="home-group-plus" size={24} color="black" />
        </Pressable>
        </View>
    </View>
      <View style={styles.categoryStyle}>
      <View>
        <MaterialCommunityIcons name="home-city" size={24} color="black" />
      </View>

        <Text style={{fontSize: 22}}>Category</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View style={styles.categoryStyle}>
      <View>
        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
      </View>
        <Text style={{fontSize: 22}}>Location</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      
        
      </View>
        <View style={styles.viewInputStyle}>
          <TextInput style={[styles.inputTextStyle, { textAlignVertical: 'top' }]} placeholder="Add Title"></TextInput>
        </View>
        <View style={styles.viewInputStyle}>
          <TextInput style={[styles.inputTextStyle, { textAlignVertical: 'top' }]} placeholder="Enter Description" multiline numberOfLines={3}></TextInput>
        </View>
        <View style={styles.shortField}>
          <FontAwesome name="dollar" size={24} color="black" style={{marginLeft: 20}}/>
          <TextInput  placeholder="Enter Price" style={{marginRight: 50, fontSize: 20, marginLeft: 7}}></TextInput>
        </View>

        <View style={{
          margin: 0, 
          borderRadius: 30,
          backgroundColor: colors.primary, 
          alignItems: 'center', 
          paddingLeft: 20,
          marginTop: 20,
          marginBottom: 20}}>
          <Text style={{color: colors.secondary, paddingVertical: 10, fontSize: 17, fontWeight: 'bold'}}>
          POST NEST</Text>
        </View>
   </View>
</ScrollView>
  );
};

export default withAuthenticator(Listing);