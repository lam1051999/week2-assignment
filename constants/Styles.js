import {
  POLO_BLUE_COLOR,
  FOLLOW_COLOR,
  SEND_MESSAGE_COLOR,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from "./Constants";

import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
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
    fontSize: 23,
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
    height: SCREEN_HEIGHT / 3.5,
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
