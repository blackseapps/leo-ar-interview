import React from "react";
import { Text, StyleSheet } from "react-native";
import { hp } from "../../constants/Dimensions";
import  Fonts from "../../constants/Fonts";

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function(...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles =  StyleSheet.create({
  defaultText: {
    fontFamily: Fonts.regular,
    letterSpacing:-0.3,
  },
});

