import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert, Pressable, Entypo, ScrollView } from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import styles from './styles'


const SelectCategoryScreen = () => {
  const navigation = useNavigation();
 
  const [categoryState, setCategoryState] = useState({

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
        name: "Vehicle",
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
      {categoryState.names.map((item, index)=>(
        <Pressable 
        key={item.id}
        onPress={()=>{
          navigation.navigate("Listing", {
          categoryID: item.id,
          categoryName: item.name,
          });
        }}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


export default SelectCategoryScreen;
