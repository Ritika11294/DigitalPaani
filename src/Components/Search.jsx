import React, { useState, useEffect } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("Bangalore");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("Please enter City");
      return;
    }
    getCity(city);
    setCity("");
  };

  const getCity = (city) => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }
    try {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?q=${city}&key=72b8bad81e454e7b97f53716241101`
        )
        .then((res) => {
          onSearch(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError("Error fetching weather data");
        });
    } catch (error) {
      console.log(error);
      setError("Error fetching weather data");
    }
  };

  useEffect(() => {
    getCity(city);
  }, []);

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="center"
      mb={4}
    >
      <Input
        type="text"
        placeholder="Enter city"
        mr={2}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        variant="filled"
        isInvalid={error !== ""}
        errorBorderColor="red.300"
        required
        width={{ base: "100%", sm: "250px", md: "300px" }}
      />
      <Button type="submit" colorScheme="teal">
        Search
      </Button>
      {error && (
        <Text color="red.500" ml={2}>
          {error}
        </Text>
      )}
    </Box>
  );
};

export default Search;
