import React from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  ...props
}: {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  props?: TextInputProps;
}) => {
  return (
    <RNTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      className="border border-gray-300 rounded-md p-2"
      {...props}
    />
  );
};

export default TextInput;
