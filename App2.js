import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import colors from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";
import request from "./app/api/listings";

export default function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    listJob();
    console.log(jobs);
  }, []);

  const listJob = async () => {
    request.open("GET", "http://192.168.43.35:5000/job");
    const response = await request.send();
  };
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: colors.primary,
          background: colors.white,
        },
      }}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}
