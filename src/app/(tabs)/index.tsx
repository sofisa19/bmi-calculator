import Card from "@/components/Card";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import Slider from "@react-native-community/slider";

import RadioInput from "@/components/RadioInput";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

type Gender = "Male" | "Female" | "Prefer not to say";

const BMI_MIN = 12;
const BMI_MAX = 45;

const RED = "#b91c1c";
const YELLOW = "#ca8a04";
const GREEN = "#15803d";

type BmiInterpretation = { label: string; color: string };

const getBmiInterpretation = (bmi: number): BmiInterpretation => {
  if (bmi < 16) return { label: "Severe underweight", color: RED };
  if (bmi < 17) return { label: "Moderate underweight", color: RED };
  if (bmi < 18.5) return { label: "Mild underweight", color: YELLOW };
  if (bmi <= 25) return { label: "Normal weight", color: GREEN };
  if (bmi < 30) return { label: "Overweight", color: YELLOW };
  if (bmi < 35) return { label: "Obese (Class I)", color: RED };
  if (bmi < 40) return { label: "Obese (Class II)", color: RED };
  return { label: "Obese (Class III)", color: RED };
};

const getKgForNormal = (
  bmi: number,
  weight: number,
  height: number,
): string => {
  const h = height / 100;
  const minNormal = 18.5 * h * h;
  const maxNormal = 25 * h * h;
  if (bmi < 18.5) {
    const kg = minNormal - weight;
    return `You need to gain ${kg.toFixed(1)} kg to reach normal weight`;
  }
  if (bmi > 25) {
    const kg = weight - maxNormal;
    return `You need to lose ${kg.toFixed(1)} kg to reach normal weight`;
  }
  return "You're within the normal weight range";
};

const BmiCalculatorPage = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender>();

  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const [open, setOpen] = useState(false);

  const bmi = weight / (height / 100) ** 2;
  const bmiClamped = Math.max(BMI_MIN, Math.min(BMI_MAX, bmi));
  const pointerPercent = ((bmiClamped - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100;
  const interpretation = getBmiInterpretation(bmi);

  const calculateBMI = () => {};
  return (
    <View>
      <Card>
        <FloatingLabelInput
          label="Username"
          leftIcon="person-outline"
          value={username}
          onChangeText={setUsername}
          keyboardType="default"
        />
        <FloatingLabelInput
          label="Age"
          leftIcon="calendar-number-outline"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Text className="text-gray-700 mt-2">
          <Text className="font-semibold text-gray-900">Optional:</Text> needed
          only for saving the value to the history
        </Text>
      </Card>
      <Card>
        <Text className="text-lg font-semibold text-gray-900 mb-2">Gender</Text>
        <RadioInput
          label="Male"
          selected={gender === "Male"}
          onSelect={() => setGender("Male")}
        />
        <RadioInput
          label="Female"
          selected={gender === "Female"}
          onSelect={() => setGender("Female")}
        />
        <RadioInput
          label="Prefer not to say"
          selected={gender === "Prefer not to say"}
          onSelect={() => setGender("Prefer not to say")}
        />
      </Card>
      <Card>
        <View className="flex flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
            <Ionicons name="body-outline" size={22} color="#208AEF" />
          </View>
          <Slider
            minimumValue={100}
            maximumValue={250}
            value={height}
            onValueChange={(v) => setHeight(v)}
            step={1}
            minimumTrackTintColor="#208AEF"
            maximumTrackTintColor="#9ca3af"
            thumbTintColor="#1565c0"
            style={{ flex: 1, height: 40 }}
          />
        </View>
        <View>
          <Text className="text-sm text-gray-600">
            Height:{" "}
            <Text className="text-lg font-bold text-gray-900">
              {Math.round(height)} cm
            </Text>
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
            <Ionicons name="barbell-outline" size={22} color="#208AEF" />
          </View>
          <Slider
            minimumValue={30}
            maximumValue={300}
            value={weight}
            onValueChange={(v) => setWeight(v)}
            step={1}
            minimumTrackTintColor="#208AEF"
            maximumTrackTintColor="#9ca3af"
            thumbTintColor="#1565c0"
            style={{ flex: 1, height: 40 }}
          />
        </View>
        <View>
          <Text className="text-sm text-gray-600">
            Weight:{" "}
            <Text className="text-lg font-bold text-gray-900">
              {Math.round(weight)} kg
            </Text>
          </Text>
        </View>
      </Card>

      <Card>
        <Text className="text-lg font-semibold text-gray-900 mb-2 text-center">
          BMI Ranges
        </Text>
        <View
          className="flex flex-row gap-2"
          style={{ marginLeft: 8, marginRight: 8 }}
        >
          <View
            className="flex-1 rounded-md py-2 px-3 items-center"
            style={{ backgroundColor: "#dbeafe" }}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: "#1d4ed8" }}
            >
              Low
            </Text>
            <Text className="text-xs mt-0.5" style={{ color: "#1d4ed8" }}>
              &lt; 18.5
            </Text>
          </View>
          <View
            className="flex-1 rounded-md py-2 px-3 items-center"
            style={{ backgroundColor: "#dcfce7" }}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: "#15803d" }}
            >
              Normal
            </Text>
            <Text className="text-xs mt-0.5" style={{ color: "#15803d" }}>
              18.5 – 24.9
            </Text>
          </View>
          <View
            className="flex-1 rounded-md py-2 px-3 items-center"
            style={{ backgroundColor: "#fee2e2" }}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: "#b91c1c" }}
            >
              High
            </Text>
            <Text className="text-xs mt-0.5" style={{ color: "#b91c1c" }}>
              ≥ 25
            </Text>
          </View>
        </View>
      </Card>
      <Pressable
        onPress={() => setOpen(true)}
        className="flex-row justify-center items-center py-4 px-6 rounded-xl active:opacity-90 mt-4 mx-4"
        style={{ backgroundColor: "#208AEF" }}
      >
        <Text className="text-lg font-semibold text-white">Calculate BMI</Text>
      </Pressable>
      <Modal
        isVisible={open}
        onSwipeComplete={() => setOpen(false)}
        swipeDirection="down"
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View style={{ paddingBottom: 70, paddingHorizontal: 16 }}>
          <Card>
            <Text className="text-lg font-semibold text-gray-900 mb-4 text-center">
              BMI Result
            </Text>

            {/* BMI scale: red (severe) - yellow (mild) - green (normal) - yellow (mild) - red (severe) */}
            <View className="mb-6">
              <View className="flex flex-row h-4 rounded-full overflow-hidden">
                <View style={{ flex: 4, backgroundColor: RED }} />
                <View style={{ flex: 2.5, backgroundColor: YELLOW }} />
                <View style={{ flex: 6.5, backgroundColor: GREEN }} />
                <View style={{ flex: 5, backgroundColor: YELLOW }} />
                <View style={{ flex: 15, backgroundColor: RED }} />
              </View>
              {/* Pointer */}
              <View
                className="absolute"
                style={{
                  left: `${pointerPercent}%`,
                  marginLeft: -8,
                  top: -14,
                }}
              >
                <View
                  style={{
                    width: 0,
                    height: 0,
                    borderLeftWidth: 10,
                    borderRightWidth: 10,
                    borderTopWidth: 14,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderTopColor: "#111827",
                  }}
                />
              </View>
            </View>

            <View className="flex flex-row justify-between mb-4 px-0.5">
              <Text className="text-xs text-gray-500">12</Text>
              <Text className="text-xs text-gray-500">45</Text>
            </View>

            <Text className="text-base font-semibold text-gray-900 mb-2 text-center">
              Your BMI is{" "}
              <Text style={{ color: interpretation.color, fontWeight: "700" }}>
                {bmi.toFixed(1)}
              </Text>
            </Text>

            <Text
              className="text-xl font-bold text-center mb-2"
              style={{ color: interpretation.color }}
            >
              {interpretation.label}
            </Text>

            <Text className="text-sm text-gray-700 text-center">
              {getKgForNormal(bmi, weight, height)}
            </Text>

            <Button title="Close" onPress={() => setOpen(false)} />
          </Card>
        </View>
      </Modal>
    </View>
  );
};

export default BmiCalculatorPage;
