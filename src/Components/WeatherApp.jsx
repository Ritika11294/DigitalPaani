import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  AbsoluteCenter,
  Flex,
  Image,
} from "@chakra-ui/react";
import Search from "../Components/Search";
import "./weather.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <div className="background-wrapper">
        <Container maxW="container.sm" mt={8} display="flex" flexDirection="column" alignItems="center">
          <Search onSearch={handleSearch} />{" "}
          <AbsoluteCenter>
            <Box
              // bgGradient="linear(to-br, blue.500, purple.500)"
              boxShadow="md"
              p={6}
              rounded="md"
            >
              {weatherData && (
                <Box className="flex items-center justify-center mb-6">
                  <Flex className="relative items-center">
                    <Text className="text-3xl font-bold">
                      Weather in {weatherData.location.name}
                    </Text>
                    <Image
                      alt="Weather icon"
                      className="w-20 h-20 mr-4" mt={-4}
                      src={weatherData.current.condition.icon}
                    />
                  </Flex>
                  <Box className="ml-6">
                    <Text className="text-4xl font-bold">
                      {weatherData.current.temp_c}°C
                    </Text>
                    <Text className="text-gray-500">
                      {weatherData.current.condition.text}
                    </Text>
                  </Box>
                </Box>
              )}
              <Flex className="grid grid-cols-2 gap-4">
                <Box className="bg-gray-100 rounded-lg p-4">
                  <Text className="text-gray-500 mb-4">Feels like</Text>
                  <Text className="text-2xl font-bold">
                    {weatherData?.current.feelslike_c || "--"}°C
                  </Text>
                </Box>
                <Box className="bg-gray-100 rounded-lg p-4" ml={6}>
                  <Text className="text-gray-500 mb-1 ">Humidity</Text>
                  <Text className="text-2xl font-bold">
                    {weatherData?.current.humidity || "--"}%
                  </Text>
                </Box>
                <Box className="bg-gray-100 rounded-lg p-4" ml={6}>
                  <Text className="text-gray-500 mb-1">Wind</Text>
                  <Text className="text-2xl font-bold">
                    {weatherData?.current.wind_kph || "--"} km/h
                  </Text>
                </Box>
                <Box className="bg-gray-100 rounded-lg p-4" ml={6}>
                  <Text className="text-gray-500 mb-1">Pressure</Text>
                  <Text className="text-2xl font-bold">
                    {weatherData?.current.pressure_mb || "--"} hPa
                  </Text>
                </Box>
              </Flex>
            </Box>
          </AbsoluteCenter>
        </Container>
      </div>
    </div>
  );
};

export default WeatherApp;
