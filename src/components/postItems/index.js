import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform } from 'react-native';
  import styles from './styles';

  const PostItems =()=>{
    return (
        <View style={styles.container}>
        <StatusBar style="auto" backgroundColor="#fec85c"/>
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
    </View>
    );
  }

  export default PostItems;