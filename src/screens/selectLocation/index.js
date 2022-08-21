import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert, Pressable, ScrollView } from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import styles from "../Listing/styles";
import { colors } from "../../../model/color";


const SelectLocationScreen = () => {
  const navigation = useNavigation();
 
  const [locationState, setLocationState] = useState({
    names: [
      {
         id: 0,
         name: "San Antonio",
       },
      {
         id: 1,
         name: "Houston",
       },
      {
         id: 2,
         name: "Dallas",
       },
      {
         id: 3,
         name: "Fort Worth",
       },
      {   
         id: 4,
         name: "El Paso",
       },
       {
        id: 5,
        name: "Amarillo",
      },
      {
        id: 6,
        name: "Lubbock",
      },
      {
        id: 7,
        name: "Abilene",
      },
      {
        id: 8,
        name: "Witchita Falls",
      },
     ],
 
  });

 return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          margin: 20}}>
        Choose a Rental Category
      </Text>
      {locationState.names.map((item, index)=>(
        <Pressable 
        key={item.id}
        android_ripple={{color: colors.grey}}
        style={{
          padding: 15, 
          backgroundColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: colors.grey,
          paddingLeft: 20}}
        onPress={()=>{
          navigation.navigate("Listing", {
          locationID: item.id,
          locationName: item.name,
          });
        }}>
          
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


export default SelectLocationScreen;
