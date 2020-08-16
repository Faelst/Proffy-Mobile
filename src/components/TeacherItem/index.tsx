import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";

import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles/styles";
import { RectButton } from "react-native-gesture-handler";

export interface Teacher {
  id: number;
  avatar_url: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  const [isFavorited, setIsFavorited] = useState(props.favorited);

  function handleLinkToWhatsapp() {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=+55${props.teacher.whatsapp}`
    );
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];
    if (favorites) favoritesArray = JSON.parse(favorites);

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === props.teacher.id;
      });
      favoritesArray.splice(favoriteIndex,1)
      setIsFavorited(false)
    } else {
      favoritesArray.push(props.teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: props.teacher.avatar_url }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.teacher.name}</Text>
          <Text style={styles.subject}>{props.teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{props.teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ {props.teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutLineIcon} />
            )}
          </RectButton>

          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.containerButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
