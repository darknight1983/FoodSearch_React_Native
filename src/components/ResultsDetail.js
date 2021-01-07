import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ eatery }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: eatery.image_url }} style={styles.image} />
      <Text style={styles.name}>{eatery.name}</Text>
      <Text>
        {eatery.rating} Stars, {eatery.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
