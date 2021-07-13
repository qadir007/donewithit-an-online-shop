import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function App() {
  const scanlValue = new Animated.Value(0);
  const rotateValue = new Animated.Value(0);
  const cardScale = scanlValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2],
  });
  const textRotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const cardStyle = {
    ...styles.container,
    transform: [{ scale: cardScale }],
  };
  const textStyle = { ...styles.text, transform: [{ rotate: textRotate }] };
  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        scanlValue.setValue(0);
        rotateValue.setValue(0);
        Animated.timing(scanlValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(scanlValue, {
          toValue: 0,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
        Animated.timing(rotateValue, {
          toValue: 0,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      }}
    >
      <Animated.View style={cardStyle}>
        <Image
          source={require("./app/assets/mosh.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Animated.Text style={textStyle}>Hello Bro</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    margin: 50,
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
