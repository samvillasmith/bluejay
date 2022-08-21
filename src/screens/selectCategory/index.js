import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert, Pressable, ScrollView } from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import styles from './styles'
import { colors } from "../../../model/color";


const SelectCategoryScreen = () => {
  const navigation = useNavigation();
 
  const [catState, setCatState] = useState({

    names: [
     {
        id: 0,

        fullIcon: (
          <Entypo style={styles.catIcon} name="home" size={24} color="black" />
        ),
        name: "Apartment",
      },
 {
        id: 1,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="car-sport"
            size={24}
            color="black"
          />
        ),
        name: "House",
      },
 {
        id: 2,
        fullIcon: (
          <MaterialIcons
            style={styles.catIcon}
            name="room-preferences"
            size={24}
            color="black"
          />
        ),
        name: "Household Items",
      },
   {
        id: 3,
        fullIcon: (
          <Entypo style={styles.catIcon} name="book" size={24} color="black" />
        ),
        name: "Books",
      },
 {
        id: 4,
        fullIcon: (
          <AntDesign
            style={styles.catIcon}
            name="paperclip"
            size={24}
            color="black"
          />
        ),
        name: "Office Equipment",
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
      {catState.names.map((item, index)=>(
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
          catID: item.id,
          catName: item.name,
          });
        }}>
          {item.fullIcon}
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


export default SelectCategoryScreen;
