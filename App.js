import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { AppStyles as styles } from "./src/styles/Styles";
import { POLO_BLUE_COLOR } from "./src/constants/Constants";
import { SCREEN_WIDTH } from "./src/constants/Constants";

const images = [
  { id: 1, uri: require("./src/assets/1.jpeg") },
  { id: 2, uri: require("./src/assets/2.jpeg") },
  { id: 3, uri: require("./src/assets/3.jpeg") },
  { id: 4, uri: require("./src/assets/4.jpeg") },
  { id: 5, uri: require("./src/assets/5.jpeg") },
  { id: 6, uri: require("./src/assets/6.jpeg") },
  { id: 7, uri: require("./src/assets/7.jpeg") },
  { id: 8, uri: require("./src/assets/8.jpeg") },
  { id: 9, uri: require("./src/assets/9.jpeg") },
  { id: 10, uri: require("./src/assets/10.jpeg") },
];

const centerId = Math.round(images.length / 2);
function ImageItem({ uri }) {
  const imageWidth = (SCREEN_WIDTH - 40) / 2 - 5;
  const imageProps = Image.resolveAssetSource(uri);
  const imageHeight = (imageProps.height / imageProps.width) * imageWidth;
  return (
    <Image
      source={uri}
      style={[styles.image, { width: imageWidth, height: imageHeight }]}
    />
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerIconsContainer}>
          <Ionicons name="md-arrow-back" size={30} color={POLO_BLUE_COLOR} />
          <Entypo name="grid" size={30} color={POLO_BLUE_COLOR} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoImageContainer}>
            <Image
              style={styles.infoImage}
              resizeMode="cover"
              source={require("./src/assets/avatar1.jpeg")}
            />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoName}>Tran Lam</Text>
            <Text style={styles.infoJob}>Developer</Text>
            <View style={styles.infoButtons}>
              <TouchableOpacity
                style={styles.infoButton1}
                onPress={() => alert("Followed")}
              >
                <Text style={{ color: "white" }}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.infoButton2}
                onPress={() => alert("message sended")}
              >
                <Ionicons name="ios-send" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.accountInfoContainer}>
          <View style={styles.accountInfoItem}>
            <Text style={styles.itemNumber}>210</Text>
            <Text style={styles.itemText}>Photos</Text>
          </View>
          <View style={styles.accountInfoItem}>
            <Text style={styles.itemNumber}>15k</Text>
            <Text style={styles.itemText}>Followers</Text>
          </View>
          <View style={styles.accountInfoItem}>
            <Text style={styles.itemNumber}>605</Text>
            <Text style={styles.itemText}>Following</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.galleryContainer}>
          <View style={styles.galleryCol}>
            {images.slice(0, centerId).map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <ImageItem uri={item.uri} />
              </View>
            ))}
          </View>
          <View style={styles.galleryCol}>
            {images.slice(centerId).map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <ImageItem uri={item.uri} />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomIconsContainer}>
          <AntDesign name="wallet" size={26} color={POLO_BLUE_COLOR} />
          <AntDesign name="pluscircleo" size={26} color={POLO_BLUE_COLOR} />
          <AntDesign name="user" size={26} color={POLO_BLUE_COLOR} />
        </View>
      </View>
    </SafeAreaView>
  );
}
