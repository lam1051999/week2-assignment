import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { AppStyles as styles } from "./src/styles/Styles";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "./src/constants/Constants";

const imageWidth = (SCREEN_WIDTH - 40) / 2 - 5;
export default function ImageItem({ uri }) {
  const imageProps = Image.resolveAssetSource(uri);
  const [imageHeight, setImageHeight] = useState(SCREEN_HEIGHT / 4);
  useEffect(() => {
    console.log(imageProps);
    setImageHeight((imageProps.height / imageProps.width) * imageWidth);
  }, []);
  return (
    <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} />
  );
}
