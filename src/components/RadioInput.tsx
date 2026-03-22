import React from "react";
import { Pressable, Text, View } from "react-native";

type RadioInputProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

const RadioInput = ({ label, selected, onSelect }: RadioInputProps) => {
  return (
    <Pressable
      onPress={onSelect}
      className="flex flex-row items-center gap-3 py-2 active:opacity-70"
    >
      <View
        className="w-5 h-5 rounded-full border-2 items-center justify-center"
        style={{
          borderColor: selected ? "#208AEF" : "#9ca3af",
          backgroundColor: selected ? "#208AEF" : "transparent",
        }}
      >
        {selected && (
          <View
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "white" }}
          />
        )}
      </View>
      <Text className="text-base text-gray-800">{label}</Text>
    </Pressable>
  );
};

export default RadioInput;
