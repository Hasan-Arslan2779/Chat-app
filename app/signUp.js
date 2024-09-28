import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignUp() {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef ||
      !profileRef
    ) {
      Alert.alert("Sign Up", "Please fill all the fields !");
      return;
    }
    setLoading(true);
    // register procces
    let response = await register(
      emailRef.current,
      passwordRef.current,
      usernameRef.current,
      profileRef.current
    );
    setLoading(false);
    console.log("got result", response);
    if (!response.succes) {
      Alert.alert("Sign Up", response.msg);
    }
  };
  return (
    <CustomKeyboardView>
      <View className="flex-1  ">
        <StatusBar style="dark" />
        <View
          className="flex-1 gap-12"
          style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
        >
          {/* signIn image */}
          <View className="items-center">
            <Image
              source={require("../assets/images/register.png")}
              style={{ height: hp(20) }}
              resizeMode="contain"
            />
          </View>
          <View className="gap-10">
            <Text
              className="font-bold tracking-wider text-center text-neutral-800"
              style={{ fontSize: hp(4) }}
            >
              Sign Up
            </Text>

            {/* inputs */}
            <View className="gap-2">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="person" size={hp(2.7)} color={"gray"} />
                <TextInput
                  onChange={(value) => (usernameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700 "
                  placeholder="Username"
                  placeholderTextColor={"gray"}
                />
              </View>
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
              <View className="gap-2">
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
                <View
                  style={{ height: hp(7) }}
                  className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
                >
                  <Octicons name="image" size={hp(2.7)} color={"gray"} />
                  <TextInput
                    onChange={(value) => (profileRef.current = value)}
                    style={{ fontSize: hp(2) }}
                    className="flex-1 font-semibold text-neutral-700 "
                    placeholder="Profile Url"
                    placeholderTextColor={"gray"}
                  />
                </View>
              </View>
              {/* sumbit buton */}
              <View className="mt-2">
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(6.5)} />
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={{ height: hp(6.5) }}
                    className="bg-indigo-500 rounded-xl  justify-center items-center"
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="font-bold text-white tracking-wider"
                    >
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              {/* sign up text */}
              <View className="flex-row justify-center ">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-500"
                >
                  Already have an account ? {""}
                </Text>
                <Pressable onPress={() => router.navigate("signIn")}>
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="font-semibold text-indigo-500"
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
