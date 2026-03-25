import HistoryComponent from "@/components/HistoryComponent";
import React, { useCallback, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { storage } from "../utils/storage";
import type { HistoryData } from "./index";

const HistoryPage = () => {
  const readHistory = useCallback((): HistoryData[] => {
    try {
      const raw = storage.getString("history");
      return JSON.parse(raw ?? "[]") as HistoryData[];
    } catch {
      return [];
    }
  }, []);

  const [history, setHistory] = useState<HistoryData[]>(readHistory);

  // Expo Router tabs keep the screen mounted; refresh on every focus.
  useFocusEffect(
    useCallback(() => {
      setHistory(readHistory());
    }, [readHistory]),
  );

  const confirmDeleteItem = (time: number) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteHistoryItem(time),
      },
    ]);
  };

  const deleteHistoryItem = (time: number) => {
    const newHistory = history.filter((item) => item.time !== time);
    storage.set("history", JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  return (
    <View>
      <FlatList
        data={history}
        renderItem={({ item, index }) => (
          <HistoryComponent
            key={item.time}
            item={item}
            deleteItem={confirmDeleteItem}
          />
        )}
        ListEmptyComponent={
          <View>
            <Text>No history</Text>
          </View>
        }
      />
    </View>
  );
};

export default HistoryPage;
