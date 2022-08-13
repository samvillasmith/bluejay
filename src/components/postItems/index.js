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

  const PostItems =()=>{
    const navigation = useNavigation()
    return (
        <Pressable onPress={()=>{
          navigation.navigate("PostDetails")

        }} style={styles.container}>
       
        <View style={styles.postWrap}>
          <Image 
          source={{uri:"https://picsum.photos/200/300"}} 
          style={styles.postImage}></Image>
          <View style={styles.postContentWrap}>
            <View>
                <Text style={{fontWeight: "bold"}}>Properties for Rent</Text>
                <Text style={styles.postTitle}>New York</Text>
            </View>
            <Text style={styles.postValue}>$100 per day</Text>
          </View>
      </View>
    </Pressable>
    );
  }

  export default PostItems;