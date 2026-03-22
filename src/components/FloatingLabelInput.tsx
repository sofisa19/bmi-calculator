import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput as RNTextInput, TextInputProps, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type IconName = keyof typeof Ionicons.glyphMap;

const FloatingLabelInput = ({
  label,
  leftIcon,
  value,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  ...props
}: {
  label: string;
  leftIcon?: IconName;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
} & TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const translateY = useSharedValue(0);

  const isFloating = isFocused || value.length > 0;

  React.useEffect(() => {
    translateY.value = withTiming(isFloating ? -22 : 0, {
      duration: 200,
    });
  }, [isFloating]);

  const labelAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View className="flex flex-row items-center">
      {leftIcon && (
        <View className="mr-2">
          <Ionicons name={leftIcon} size={24} color="black" />
        </View>
      )}
      <View className="flex-1 relative border border-gray-300 rounded-md min-h-[56px] justify-center">
        <RNTextInput
          placeholder={isFloating ? placeholder : ""}
          value={value}
          onChangeText={onChangeText}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className="flex-1 px-3 py-4 text-base"
          placeholderTextColor="#9ca3af"
          {...props}
        />
        <Animated.Text
          style={[
            labelAnimatedStyle,
            {
              position: "absolute",
              left: 12,
              top: 18,
              color: isFloating ? "#208AEF" : "#374151",
              fontSize: 14,
              fontWeight: isFloating ? "600" : "500",
            },
          ]}
          pointerEvents="none"
        >
          {label}
        </Animated.Text>
      </View>
    </View>
  );
};

export default FloatingLabelInput;
