import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native' 
import PostDetails from '../../screens/postDetails';
import { useState } from 'react';

  const PostItems =(props)=>{
    const navigation = useNavigation()
    const lonePost = props.post;
    const [images, setImages] = useState(JSON.parse(lonePost.images))
    console.log(images)
    return (
        <Pressable onPress={()=>{
          navigation.navigate("PostDetails")
        }} style={styles.container}>
       
        <View style={styles.postWrap}>
          <Image 
          source={{uri:"https://d1jycl47tmd7cw.cloudfront.net/fit-in/400x400/public/"+images[0].imageUri}} 
          style={styles.postImage}></Image>
          <View style={styles.postContentWrap}>
            <View>
                <Text style={{fontWeight: "bold"}}>{lonePost.title}</Text>
                <Text style={styles.postTitle}>{lonePost.locationName}</Text>
            </View>
            <Text style={styles.postValue}>{lonePost.rentValue}</Text>
          </View>
      </View>
    </Pressable>
    );
  }

  export default PostItems;