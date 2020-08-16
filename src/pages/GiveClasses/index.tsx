import React from "react";
import { Text, View, ImageBackground } from "react-native";

import giveClassesImageBackground from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {

    const { goBack } = useNavigation()

    function handleNavigateBack(){
        goBack();
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesImageBackground}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy ?</Text>
        <Text style={styles.description}>
          Aguarde que em breve disponiveis para ANDROID e IOS...
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.oKButton}>
        <Text style={styles.oKbuttonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
