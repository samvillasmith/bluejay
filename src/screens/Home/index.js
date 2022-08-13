import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Platform, 
  TextInput} from 'react-native';
  import { colors } from '../../../model/color';
  import PostItems from '../../components/postItems';
  import HeaderForMobile from '../../components/HeaderForMobile';

const Home =()=>{
  return (
    <>
      <HeaderForMobile />
      <PostItems />
    </>
  );
};

export default Home;