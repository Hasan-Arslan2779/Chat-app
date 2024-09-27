import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";
const MainLayout = () => {
  const { isAuthencticated } = useAuth();
  // Doğru sayfada olup olmadığımızı control eder
  const segments = useSegments();
  // Sayfa Yönlendirmesi İçin Kullanılır
  const router = useRouter();

  useEffect(() => {
    // check if user authenticated or not
    if (typeof isAuthencticated === "undefined") return;
    // App içinde mi diye konrol ediyor
    const inApp = segments[0] === "(app)";
    if (isAuthencticated && !inApp) {
      //Anasayfaya Yönlendirme
      router.replace("home");
    } else if (isAuthencticated === false) {
      //Giriş Sayfasına Yönlendirme,
      router.replace("signIn");
    }
  }, [isAuthencticated]);
  return <Slot />;
};

export default function _layout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
