import React, { useState, useEffect } from "react";
import { View  } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import AsyncStorage from "@react-native-community/async-storage"

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem("favorites").then((resp) => {
      if (resp) {
        const favoriteTeachers = JSON.parse(resp);
        
        setFavorites(favoriteTeachers);
      }
    });
  }

  useFocusEffect(()=>{
    loadFavorites();

  })

  return (
    <View style={styles.container}>
      <PageHeader headerRight={false} title="Meus Proffys favoritos" />

      <ScrollView style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 8
        }}
      >
        {favorites.map((teacher:Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited/>
        })}
        
      </ScrollView>
      
    </View>
  );
}

export default Favorites;
