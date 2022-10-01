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
  import { colors } from '../../../model/color';
  import PostItems from '../../components/postItems';
  import HeaderForMobile from '../../components/HeaderForMobile';
  import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const PostDetails =()=>{

  const route = useRoute();
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState(route.params.postInfo.owner)
  const [images, setImages] = useState(JSON.parse(route.params.postInfo.images))
  
  const substrEmail = userEmail.substr(0, userEmail.indexOf("@"));
  
  // setUserEmail()

  return (
  <View style={{flex: 1, position: 'relative'}}>
   <ScrollView horizontal={true}>
    {images && images.map((data, index)=>(
      <Image 
      source={{uri:"https://d1jycl47tmd7cw.cloudfront.net/fit-in/400x400/public/"+images[index].imageUri}}
      style={{height: 330, width: 300}}
      key={index}
      />
    ))}
   </ScrollView>
   <ScrollView>
      <Text style={{
        margin: 10, 
        flexDirection: 'row', 
        marginoTop: 20, 
        marginBottom: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.secondary
        }}>{route.params.postInfo.title}</Text>
        <View>
          <View style={{backgroundColor: colors.secondary, 
            marginLeft: 10, 
            alignSelf: 'flex-start',
            alignItems: 'center', 
            borderRadius: 50}}>
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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ratesStyle}>
              <Text style={{
                fontSize: 10,
                color: colors.secondary, 
                fontWeight: 'bold'}}>Daily: ${route.params.postInfo.rentValue}</Text>
            </View>
            <View style={styles.ratesStyle}>
              <Text style={{
                fontSize: 10,
                color: colors.secondary, 
                fontWeight: 'bold'}}>Weekly: ${route.params.postInfo.rentValue * 7}</Text>
            </View>
            <View style={styles.ratesStyle}>
              <Text style={{
                fontSize: 10,
                color: colors.secondary, 
                fontWeight: 'bold'}}>Monthly: ${route.params.postInfo.rentValue * 30}</Text>
            </View>
          </View>
            <View style={{margin: 10}}>
              <Text style={{color: colors.grey}}>Preferred Meetup Location</Text>
              <Text>{route.params.postInfo.locationName}</Text>
            </View>
        </View>
            <View style={{margin: 10}}>
              <Text style={{color: colors.grey}}>Description</Text>
              <Text>{route.params.postInfo.description}</Text>
          </View>
        </ScrollView>
        <Pressable style={{
            position: 'absolute',
            bottom: 10,
            alignSelf: 'flex-end'
        }}>
            <Text style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 50,
              color: colors.white
            }}>Order</Text>
          </Pressable>
  </View>
  );
};

export default PostDetails;