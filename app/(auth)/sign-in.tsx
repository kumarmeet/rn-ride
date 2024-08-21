import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);

  const onSignUpPress = () => {
    console.log(form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          <Image
            source={images.signUpCar}
            className="z-0 w-full h-[200px]"
          />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Log In Your Account
          </Text>
        </View>
        <View className="p-4">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm((prevState) => ({ ...prevState, email: value }))
            }
          />

          <InputField
            secureTextEntry={showPassword}
            onToggleShowPassword={() => setShowPassword((prev) => !prev)}
            label="Password"
            placeholder="********"
            icon={showPassword ? icons.eyecross : icons.eyevisible}
            value={form.password}
            onChangeText={(value) =>
              setForm((prevState) => ({ ...prevState, password: value }))
            }
          />

          <CustomButton
            title="Sign In"
            className="mt-4"
            onPress={onSignUpPress}
          />

          <OAuth />

          <Link
            href="/(auth)/sign-up"
            className="text-lg text-center text-general-200 mt-6"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
}
