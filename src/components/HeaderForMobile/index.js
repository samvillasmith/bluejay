import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TextInput,
  Platform } from 'react-native';
  import styles from './styles';
  import { colors } from '../../../model/color';
  import PostItems from '../postItems';
  import { EvilIcons, Entypo, Ionicons} from '@expo/vector-icons';
  const HeaderForMobile =()=>{
    return (
      <>
        <View style={styles.headerWrap}>
        <View style={styles.searchByTextWrap}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput 
          placeholder='Search Rent.com' 
          style={styles.searchPlaceholder}
          multiline={false}
          />
        </View>
        <View style={styles.locationCategorySearchWrap}
          >
          <View style={styles.locationSearchWrap}>
          <Entypo name="location" size={24} color="black" />
            <Text>Location</Text>
            <Text style={styles.locationSearchText}>New York</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Ionicons name="options-sharp" size={24} color="black" />
            <Text style={styles.categoryText}>Category</Text>
            <Text style={styles.categoryDynamicText}>Vehicle</Text>
          </View>
        </View>
      </View>
      </>
    );
  };

  export default HeaderForMobile;