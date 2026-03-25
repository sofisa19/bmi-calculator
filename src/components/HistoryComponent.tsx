import { HistoryData } from "@/app/(tabs)";
import React from "react";
import { Pressable, Text, View, ViewProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  item: HistoryData;
  deleteItem: (time: number) => void;
} & ViewProps;

const RED = "#b91c1c";
const YELLOW = "#ca8a04";
const GREEN = "#15803d";

const getBmiChipStyle = (
  bmi: number,
): { backgroundColor: string; color: string } => {
  if (bmi < 16) return { backgroundColor: "#fee2e2", color: RED };
  if (bmi < 18.5) return { backgroundColor: "#fff7ed", color: YELLOW };
  if (bmi <= 25) return { backgroundColor: "#dcfce7", color: GREEN };
  if (bmi < 35) return { backgroundColor: "#fff7ed", color: YELLOW };
  return { backgroundColor: "#fee2e2", color: RED };
};

const formatTime = (timeMs: number) => {
  const d = new Date(timeMs);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours(),
  )}:${pad(d.getMinutes())}`;
};

const HistoryComponent = ({ item, deleteItem, ...props }: Props) => {
  const chip = getBmiChipStyle(item.bmi);
  return (
    <View
      {...props}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md mb-4"
    >
      {/* Header */}
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center gap-2">
          <Text className="text-lg font-bold text-gray-900">
            {item.username}
          </Text>

          {/* Gender Icon */}
          {item.gender === "Male" && (
            <Ionicons name="male" size={18} color="#2563eb" />
          )}
          {item.gender === "Female" && (
            <Ionicons name="female" size={18} color="#db2777" />
          )}
        </View>

        <View className="px-3 py-1 rounded-full bg-gray-200">
          <Text className="text-xs font-semibold text-gray-700">
            {item.age} yrs
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View className="h-[1px] bg-gray-100 my-2" />

      {/* Body */}
      <View className="gap-2">
        <View className="flex-row justify-between">
          <Text className="text-sm text-gray-500">Height</Text>
          <Text className="text-sm font-semibold text-gray-900">
            {Math.round(item.height)} cm
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-sm text-gray-500">Weight</Text>
          <Text className="text-sm font-semibold text-gray-900">
            {Math.round(item.weight)} kg
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-gray-500">BMI</Text>
          <View
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: chip.backgroundColor }}
          >
            <Text className="text-xs font-bold" style={{ color: chip.color }}>
              {item.bmi.toFixed(1)}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-sm text-gray-500">Result</Text>
          <View
            className="px-3 py-1 rounded-full max-w-[60%]"
            style={{ backgroundColor: chip.backgroundColor }}
          >
            <Text
              className="text-xs font-semibold text-center"
              style={{ color: chip.color }}
              numberOfLines={1}
            >
              {item.result}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-xs text-gray-400">{formatTime(item.time)}</Text>

        <View className="rounded-lg overflow-hidden">
          <Pressable
            onPress={() => deleteItem(item.time)}
            className="bg-red-600 px-4 py-2 rounded-lg active:opacity-80"
          >
            <Text className="text-white text-xs font-semibold">Delete</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HistoryComponent;
