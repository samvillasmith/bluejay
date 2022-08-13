import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{display: "flex", flexDirection: "row"}}>
          <Image 
          source={{uri:"https://picsum.photos/200/300" }} 
          style={styles.postImage}></Image>
          <View style={{ justifyContent: "space-around", paddingVertical: 10}}>
            <View>
                <Text>Properties Available for Rent</Text>
                <Text>New York</Text>
            </View>
            <Text>$100 per day</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec85c',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fec85c10"
  },
  postImage: {
    height: 100, 
      width: 100, borderRadius: 30, 
      marginLeft: 10, 
      marginRight: 20,
      marginVertical: 10
},
});
