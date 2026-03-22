import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#208AEF",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "BMI Calculator",
          headerTitle: "BMI Calculator",
          headerStyle: { backgroundColor: "#208AEF" },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerTitle: "History",
          headerStyle: { backgroundColor: "#208AEF" },
          headerTintColor: "#fff",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="history" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
