import React, { useState, useEffect } from "react";
import Yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrMsg] = useState("");

  const getEats = async (eatery) => {
    try {
      const response = await Yelp.get(`/search`, {
        params: {
          limit: 50,
          term: eatery,
          location: "Plano",
        },
      });
      const { businesses } = response.data;

      setResults(businesses);
    } catch (err) {
      setErrMsg("OOPS, Something went wrong");
    }
  };

  useEffect(() => {
    getEats("burger");
  }, []);

  return [getEats, results, errorMsg];
};
