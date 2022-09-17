import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  FlatList,
  Platform, 
  TextInput} from 'react-native';
  import { colors } from '../../../model/color';
  import PostItems from '../../components/postItems';
  import HeaderForMobile from '../../components/HeaderForMobile';
  import { API } from 'aws-amplify';
  import {getListingByCreatedAt, listListings} from '../../graphql/queries';
import PostDetails from '../postDetails';
  import Listing from '../Listing';

const Home =()=>{

  const [newItems, setNewItems] = useState([]);
  
  const fetchAll = async () =>{
    try{
      const itemListByCommonID = await API.graphql({
        query: getListingByCreatedAt,
        variables: { commonID: "1", sortDirection: "DESC"},
        authMode: 'AWS_IAM',
      });
      
      setNewItems(itemListByCommonID.data.getListingByCreatedAt.items);

    } catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchAll();
  }, [newItems]);

  return (
    <>
      <HeaderForMobile />
      <FlatList 
        data= {newItems}
        renderItem = {({item})=><PostItems post={item}/>}
      />
    </>
  );
};

export default Home;