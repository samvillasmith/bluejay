import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput} from 'react-native';
import PostItems from './src/components/postItems';
import { EvilIcons, Entypo, Ionicons} from '@expo/vector-icons';



export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewforDroid}>
      <View style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10, 
        backgroundColor: '#fec85c',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 20}}>
        <View style={{backgroundColor: 'white',
          flexDirection: 'row',
          margin: 10,
          padding: 10,
          borderRadius: 5
        }}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput 
          placeholder='Search Rent.com' 
          style={{width: '100%', marginLeft: 5}}
          multiline={false}
          />
        </View>
        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          width: '100%',
          paddingVertical: 10}}
          >
          <View style={{flexDirection: 'row'}}>
          <Entypo name="location" size={24} color="black" />
            <Text>Location</Text>
            <Text style={{fontWeight: 'bold', marginLeft: 5}}>New York</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Ionicons name="options-sharp" size={24} color="black" />
            <Text style={{marginLeft: 5}}>Category</Text>
            <Text style={{marginRight: 5, fontWeight: 'bold', marginLeft: 5}}>Vehicle</Text>
          </View>
        </View>
      </View>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec85c',
    backgroundColor: "#fec85c60"
  },
  postWrap: {
    display: "flex", 
    flexDirection: "row", 
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 5
  },
  postImage: {
      height: 100, 
      width: 100, 
      borderRadius: 30, 
      marginLeft: 10, 
      marginRight: 20,
      marginVertical: 10
},
  postContentWrap: {
      justifyContent: "space-around", 
      paddingVertical: 10,
  },
  postValue: {
        color: "#fec85c", 
        backgroundColor: "#292341",
        alignSelf: "flex-start", 
        padding: 5, 
        borderRadius: 10,
        overflow: 'hidden',
  },
  postTitle: {
    color: "grey",
  },
  SafeAreaViewforDroid: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    backgroundColor: '#fec85c60'
  },
});
