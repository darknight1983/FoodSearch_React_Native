import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useEateries from "../hooks/useEateries";
import ResultList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getEats, results, errorMsg] = useEateries();

  const filterResultsByPrice = (cost) => {
    return results.filter((place) => {
      return place.price === cost;
    });
  };
  return (
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={() => getEats(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          header="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} header="Bit Pricier" />
        <ResultList
          results={filterResultsByPrice("$$$")}
          header="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
