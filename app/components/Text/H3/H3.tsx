import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./H3.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: string | React.ReactElement;
  darkGray?: boolean;
  lightGray?: boolean;
  primary?: boolean;
  center?: boolean;
  black70?: boolean;
  black60?: boolean;
  black?: boolean;
}

export default function H1(props: Props): React.ReactElement {
  const customStyle = [styles.default, props.style];
  const { darkGray, lightGray, primary, center, black, black70, black60 } = props;

  if (darkGray) {
    customStyle.push(mainStyle.darkGray);
  }

  if (lightGray) {
    customStyle.push(mainStyle.lightGray);
  }

  if (primary) {
    customStyle.push(mainStyle.primary);
  }

  if (primary) {
    customStyle.push(mainStyle.primary);
  }

  if (center) {
    customStyle.push(mainStyle.center);
  }

  if (black70) {
    customStyle.push(mainStyle.black70);
  }

  if (black60) {
    customStyle.push(mainStyle.black60);
  }

  if (black) {
    customStyle.push(mainStyle.black);
  }

  return <Text {...props} style={customStyle} />;
}

H1.displayName = "H3";
