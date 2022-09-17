import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput} from 'react-native';
  import { colors } from '../../../model/color';
  import PostItems from '../../components/postItems';
  import HeaderForMobile from '../../components/HeaderForMobile';
  import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const PostDetails =()=>{

  const route = useRoute();
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(route.params.postInfo.owner)
  const [images, setImages] = useState(JSON.parse(route.params.postInfo.images))
  
  const substrEmail = userEmail.substr(0, userEmail.indexOf("@"));
  
  // setUserEmail()

  return (
  <View>
   <ScrollView horizontal={true}>
    {images && images.map((data, index)=>(
      <Image source={{uri:"https://d1jycl47tmd7cw.cloudfront.net/fit-in/400x400/public/"+images[index].imageUri}}
      style={{height: 330, width: 300}}
      key={index}
      />
    ))}
   </ScrollView>
      <Text style={{marginLeft: 10, 
        fontSize: 30, 
        fontWeight: 'bold',
        marginRight: 10,
        marginVertical: 30,
        marginTop: 30}}>{route.params.postInfo.title}</Text>
        <View>
          <View style={{backgroundColor: colors.secondary, marginLeft: 10, alignSelf: 'flex-start', alignItems: 'center', borderRadius: 50}}>
            <Text style={{fontWeight: 'bold', 
            fontSize: 30, 
            color: colors.primary, 
            height: 50, width: 50, 
            justifyContent: 'center', 
            alignItems: 'center', 
            alignSelf: 'center',
            paddingRight: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingTop: 5,
            borderRadius: 50,}}>{substrEmail.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={{margin: 10}}>
            <Text style={{colors: colors.grey}}>Owned by</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{substrEmail}</Text>
          </View>
        </View>
  </View>
  );
};

export default PostDetails;