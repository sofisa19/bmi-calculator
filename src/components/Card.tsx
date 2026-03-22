import React from "react";
import { View, ViewProps } from "react-native";

const Card = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: ViewProps;
}) => {
  return (
    <View
      className="bg-white rounded-lg p-4 shadow-md border border-gray-200 flex flex-col gap-2"
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;
