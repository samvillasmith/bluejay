import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput,
  Pressable,
  Alert} from 'react-native';
  import { withAuthenticator } from 'aws-amplify-react-native';
  import { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
  import { colors } from '../../../model/color';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
  import { Entypo } from '@expo/vector-icons';
  import styles from './styles';
  import { ScrollView } from 'react-native-gesture-handler';
  import { FontAwesome5 } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
  import { useRoute } from '@react-navigation/native';
  import 'react-native-get-random-values';
  import {v4 as uuidv4} from 'uuid';
  import { createListing } from '../../graphql/mutations'
 


const Listing =()=>{
  const navigation = useNavigation();
  const [category, setCategory] = useState({catID: 0, catName:"Category"});
  const [location, setLocation] = useState({locationID: 0, locationName:"Location"});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [val, setVal] = useState('');
  const [postProcessing, setProcessing] = useState(false);
  const [postSuccess, setPostSuccess] = useState('')
  const [userID, setUserID] = useState('');
  const [userEmail, setEmail] = useState('');

  useEffect(()=>{
      if(postSuccess !== ""){
        setProcessing(false);
        Alert.alert(
          'Success',
          postSuccess,
            [
              {text: 'Ok', onPress:()=>navigation.navigate('Home', {screen: 'Explore'})},
            ]);
           }
           }, [postSuccess, postProcessing ]);
    

  Auth.currentAuthenticatedUser().then((user)=>{
    setUserID(user.attributes.sub);
    setEmail(user.attributes.email);
  }).catch((err)=>{
    console.log(err)
    throw err;
  }); 
  
  const [imageData, setImageData] = useState([]);
  const route = useRoute();

  useEffect(()=>{
    if (!route.params) {
      console.log('There is no data in route');
    } else {
      if(route.params.imageData !== undefined){
        // console.log(route.params.imageData)
        setImageData(route.params.imageData)
      } else if(route.params.catID !== undefined){
        // console.log(route.params)
        setCategory(route.params)
      } else if(route.params.locationID !== undefined){
        // console.log(route.params)
        setLocation(route.params)
      }  else {
        console.log("Params is not empty")
      }
    }
  })

  const imageAllUrl =[];
  
  const storeToDB = async ()=>{
    setProcessing(true)
    imageData && 
    imageData.map(async (component, index)=>{
      const imageUrl = component.uri;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const urlParts = imageUrl.split(".");
      const extension = urlParts[urlParts.length - 1];
      const key = `${uuidv4()}.${extension}`; 
      imageAllUrl.push({imageUri: key});
      await Storage.put(key, blob);
      if(imageData.length == index + 1){
        const postData = {
          title: title,
          categoryName: category.catName,
          categoryID: category.catID,
          description: description,
          images: JSON.stringify(imageAllUrl),
          locationID: location.locationID,
          locationName: location.locationName,
          owner: userEmail,
          rentValue: val,
          userID: userID,
          commonID: "1"
        };
       
        await API.graphql({
          query: createListing,
          variables: { input: postData },
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        });
        setProcessing(false)
        setPostSuccess('Ad Posted!')
      }
    });
  };
  

  return (
  <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'>
   <View>
      <View style={{margin: 5}}>
        <View>
        <Text style={{marginTop: 10, marginBottom: 30}}>Upload Images of Something to Rent</Text>

        <Pressable 
        style={{
          justifyContent: 'center', 
          alignItems: 'center',
          margin: 20, 
          marginTop: -20,
          height: 150,
          marginVertical: 10, 
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
        <View>

          <ScrollView horizontal = {true}>
            {imageData && 
              imageData.map((component, index)=>(
              <Image 
              key={component.id}
              source={{uri:component.uri}} 
              style={{height: 100, width: 100, margin: 5}}
              />
            ))}
          </ScrollView>

        </View>
        </View>
    </View>
      <Pressable style={styles.categoryStyle} onPress={()=>{
        navigation.navigate("SelectCategory")
      }}>
      <View>
        <MaterialCommunityIcons name="home-city" size={24} color="black" />
      </View>

        <Text style={{fontSize: 22}}>{category.catName}</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </Pressable>
      <Pressable onPress={()=>
          navigation.navigate('SelectLocation')
            } style={styles.categoryStyle}>
      <View>
        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
      </View>
        <Text style={{fontSize: 22}}>{location.locationName}</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </Pressable>
        <View style={styles.viewInputStyle}>
          <TextInput 
            style={styles.inputTextStyle} 
            placeholder="Add Title" 
            onChangeText={(text)=>{
            setTitle(text);
          }}></TextInput>
        </View>
        <View style={styles.viewInputStyle}>
          <TextInput 
          style={styles.inputTextStyle} 
          placeholder="Enter Description" 
          multiline numberOfLines={3}
          onChangeText={(text)=>{
            setDescription(text);
          }}></TextInput>
        </View>
        <View style={styles.shortField}>
          <FontAwesome name="dollar" size={24} color="black" style={{marginLeft: 20}}/>
          <TextInput 
          placeholder="Enter Price" 
          keyboardType='numeric'
          style={{marginRight: 50, fontSize: 20, marginLeft: 7}}
          onChangeText={(text)=>{
            setVal(text);
          }}></TextInput>
        </View>

        <Pressable 
          onPress={()=>{
            storeToDB()
          }}
          android_ripple={{ color: 'grey' }}
          style={{
          margin: 10, 
          borderRadius: 30,
          backgroundColor: colors.primary, 
          alignItems: 'center', 
          paddingLeft: 20,
          marginTop: 10,
          marginBottom: 10}}>
          <Text style={{color: colors.secondary, 
            paddingVertical: 10, 
            fontSize: 17, 
            fontWeight: 'bold'}}>
          {postProcessing ? "Posting rental.." : "POST AD"}</Text>
        </Pressable>
   </View>
</ScrollView>
  );
};

export default withAuthenticator(Listing);