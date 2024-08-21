import { InputFieldProps } from "@/types/type";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default function InputField({
  labelStyle,
  label,
  placeholder,
  icon,
  containerStyle,
  inputStyle,
  inputMode,
  iconStyle,
  className,
  secureTextEntry = false,
  onChangeText,
  onToggleShowPassword,
  ...props
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>

          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <TouchableOpacity onPress={onToggleShowPassword}>
                <Image
                  source={icon}
                  className={`w-6 h-6 ml-4 ${iconStyle}`}
                />
              </TouchableOpacity>
            )}
            <TextInput
              className={`rounded-full p-3 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
