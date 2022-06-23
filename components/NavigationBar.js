import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, StyleSheet,Text} from "react-native";

const NavigationBar = ({ title, leftText, onPressLeftText }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  onPressLeftText: PropTypes.func,
};

NavigationBar.defaulProps = {
  title: "",
  leftText: "",
  onPressLeftText: () => {
    console.log("Hello");
  },
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  leftText: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});

export default NavigationBar;
