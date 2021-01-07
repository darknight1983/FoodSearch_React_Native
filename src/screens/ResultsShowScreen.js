import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [locationData, setLocationData] = useState(null);

  const id = navigation.getParam("id");

  const getEatery = async (id) => {
    try {
      const response = await Yelp.get(`/${id}`);
      setLocationData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEatery(id);
  }, []);

  if (!locationData) {
    return null;
  }
  return (
    <View>
      <Text>{locationData.name}</Text>
      <FlatList
        data={locationData.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultShowScreen;
