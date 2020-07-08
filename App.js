import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const images = [
  { id: 1, uri: require("./assets/1.jpeg") },
  { id: 2, uri: require("./assets/2.jpeg") },
  { id: 3, uri: require("./assets/3.jpeg") },
  { id: 4, uri: require("./assets/4.jpeg") },
  { id: 5, uri: require("./assets/5.jpeg") },
  { id: 6, uri: require("./assets/6.jpeg") },
  { id: 7, uri: require("./assets/7.jpeg") },
  { id: 8, uri: require("./assets/8.jpeg") },
  { id: 9, uri: require("./assets/9.jpeg") },
  { id: 10, uri: require("./assets/10.jpeg") },
];

const centerId = Math.round(images.length / 2);

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

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
              source={require("./assets/avatar1.jpeg")}
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
                <Image source={item.uri} style={styles.image} />
              </View>
            ))}
          </View>
          <View style={styles.galleryCol}>
            {images.slice(centerId).map((item) => (
              <View key={item.id} style={styles.imageContainer}>
                <Image source={item.uri} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoImageContainer: {
    width: 110,
    height: 110,
  },
  infoImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 100,
  },
  infoWrapper: {
    paddingHorizontal: 10,
  },
  infoName: {
    fontWeight: "bold",
    fontSize: 25,
    color: POLO_BLUE_COLOR,
    paddingHorizontal: 5,
  },
  infoJob: {
    fontSize: 15,
    color: "grey",
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  infoButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoButton1: {
    height: 30,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: FOLLOW_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  infoButton2: {
    height: 30,
    marginLeft: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: SEND_MESSAGE_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  accountInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  accountInfoItem: {
    alignItems: "center",
  },
  itemNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: POLO_BLUE_COLOR,
  },
  itemText: {
    fontSize: 17,
    color: "grey",
  },
  galleryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  galleryCol: {},
  imageContainer: {
    width: (SCREEN_WIDTH - 40) / 2 - 5,
    height: SCREEN_HEIGHT / 3,
    marginVertical: 5,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 10,
  },
  bottomIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});
