import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader/index";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import Favorites from "../Favorites";

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisabled] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const [favorite, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function handleToggleFiltersVisable() {
    setIsFiltersVisabled(!isFiltersVisible);
  }

  function loadFavorites(){
    AsyncStorage.getItem("favorites").then((resp) => {
      if (resp) {
        const favoriteTeachers = JSON.parse(resp);
        const favoritedTeachersIds = favoriteTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  async function handleFiltersSubimit() {
    loadFavorites();
    const resp = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    if (resp.data.length) setIsFiltersVisabled(false);
    setTeachers(resp.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisable}>
            <Feather name="filter" size={30} color="#FFF"></Feather>
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              style={styles.input}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a Materia ?"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia ?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o Horario ?"
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubimit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 8,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem favorited={favorite.includes(teacher.id)} key={teacher.id} teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
