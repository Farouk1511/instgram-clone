import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import AuthorRow from "./AuthorRow";

const Card = ({ fullname, image, linkText, onPressLinkText }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator size={"large"} style={StyleSheet.absoluteFill} />
        )}

        <Image
          source={image}
          style={StyleSheet.absoluteFill}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
  image: Image.propTypes.source.isRequired,
};

export default Card;
