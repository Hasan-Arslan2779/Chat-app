import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign In", "Please fill all the fields !");
      return;
    }
  };
  return (
    <View className="flex-1  ">
      <StatusBar style="dark" />
      <View
        className="flex-1 gap-12"
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
      >
        {/* signIn image */}
        <View className="items-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ height: hp(25) }}
            resizeMode="contain"
          />
        </View>
        <View className="gap-10">
          <Text
            className="font-bold tracking-wider text-center text-neutral-800"
            style={{ fontSize: hp(4) }}
          >
            Sign In
          </Text>

          {/* inputs */}
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChange={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700 "
                placeholder="Email address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="lock" size={hp(2.7)} color={"gray"} />
                <TextInput
                  onChange={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700 "
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={"gray"}
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-right text-neutral-500 "
              >
                Forgot Password ?
              </Text>
            </View>
            {/* sumbit buton */}
            <TouchableOpacity
              onPress={handleLogin}
              style={{ height: hp(6.5) }}
              className="bg-indigo-500 rounded-xl  justify-center items-center"
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="font-bold text-white tracking-wider"
              >
                Sign In
              </Text>
            </TouchableOpacity>
            {/* sign up text */}
            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Don't have an account ?{" "}
              </Text>
              <Pressable onPress={() => router.navigate("signUp")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-indigo-500"
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
